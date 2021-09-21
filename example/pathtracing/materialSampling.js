import { schlickFresnelReflectance, refract, getRandomUnitDirection, getHalfVector, schlickFresnel } from './utils.js';
import { ggxvndfDirection, ggxvndfPDF, ggxShadowMaskG2, ggxDistribution } from './ggxSampling.js';
import { MathUtils, Vector3, Color } from 'three';

const tempVector = new Vector3();
const tempDir = new Vector3();
const halfVector = new Vector3();
const tempSpecularColor = new Color();
const tempMetallicColor = new Color();
const tempDiffuseColor = new Color();


// diffuse
function diffuseWeight( reflectance, metalness, transmission ) {

	return ( 1.0 - reflectance ) * ( 1.0 - metalness ) * ( 1.0 - transmission );

}

function diffusePDF( wo, wi, material ) {

	// https://raytracing.github.io/books/RayTracingTheRestOfYourLife.html#lightscattering/thescatteringpdf
	const cosValue = wi.z;
	return cosValue / Math.PI;

}

function diffuseDirection( wo, hit, material, lightDirection ) {

	getRandomUnitDirection( lightDirection );
	lightDirection.z += 1;
	lightDirection.normalize();

}

// specular
function specularWeight( reflectance, metalness, transmission ) {

	return MathUtils.lerp( reflectance, 1.0, metalness );

}

function specularPDF( wo, wi, material ) {

	// See equation (17) in http://jcgt.org/published/0003/02/03/
	getHalfVector( wi, wo, halfVector );
	return ggxvndfPDF( wi, halfVector, material.roughness ) / ( 4 * wi.dot( wo ) );

}

function specularDirection( wo, hit, material, lightDirection ) {

	const { roughness } = material;

	// sample ggx vndf distribution which gives a new normal
	ggxvndfDirection(
		wo,
		roughness,
		roughness,
		Math.random(),
		Math.random(),
		tempVector,
	);

	// apply to new ray by reflecting off the new normal
	lightDirection.copy( wo ).reflect( tempVector ).multiplyScalar( - 1 );

}

// transmission
function transmissionWeight( reflectance, metalness, transmission ) {

	return ( 1.0 - reflectance ) * ( 1.0 - metalness ) * transmission;

}

function transmissionPDF( wo, wi, material ) {

	// Is this needed?

	// const { roughness, ior } = material;
	// const { frontFace } = hit;
	// const ratio = frontFace ? 1 / ior : ior;


	// // See equation (17) in http://jcgt.org/published/0003/02/03/
	// getHalfVector( wi, wo, halfVector );
	// return ggxvndfPDF( wi, halfVector, material.roughness ) / ( 4 * wi.dot( wo ) );


	// return 1; // TODO

}

function transmissionDirection( wo, hit, material, lightDirection ) {

	const { roughness, ior } = material;
	const { frontFace } = hit;
	const ratio = frontFace ? 1 / ior : ior;

	// sample ggx vndf distribution which gives a new normal
	ggxvndfDirection(
		wo,
		roughness,
		roughness,
		Math.random(),
		Math.random(),
		tempVector,
	);

	// apply to new ray by reflecting off the new normal
	tempDir.copy( wo ).multiplyScalar( - 1 );
	refract( tempDir, tempVector, ratio, lightDirection );

}

export function bsdfDirection( wo, hit, material, lightDirection ) {

	let randomValue = Math.random();
	const { ior, metalness, transmission } = material;
	const { frontFace } = hit;

	// TODO: this schlick fresnel is just for dialectrics because it uses ior interally
	// Change this to use a common fresnel function
	const ratio = frontFace ? 1 / ior : ior;
	const cosTheta = Math.min( wo.z, 1.0 );
	const sinTheta = Math.sqrt( 1.0 - cosTheta * cosTheta );
	let reflectance = schlickFresnelReflectance( cosTheta, ratio );
	const cannotRefract = ratio * sinTheta > 1.0;
	if ( cannotRefract ) {

		reflectance = 1;

	}

	// specular
	const sVal = specularWeight( reflectance, metalness, transmission );
	if ( randomValue <= sVal ) {

		// TODO: need to account for equation 15 in http://jcgt.org/published/0007/04/01/
		specularDirection( wo, hit, material, lightDirection );
		return metalness;

	}

	randomValue -= sVal;

	// diffuse
	const dVal = diffuseWeight( reflectance, metalness, transmission );
	if ( randomValue <= dVal ) {

		diffuseDirection( wo, hit, material, lightDirection );
		return 1;

	}

	// transmission
	transmissionDirection( wo, hit, material, lightDirection );
	return 1.0;

}

// IN PROGRESS
export function getMaterialColor( wo, wi, material, hit, targetColor ) {

	const { metalness, roughness, color } = material;
	getHalfVector( wo, wi, halfVector );

	if ( wi.z < 0 ) {

		// transmissive

	} else {

		// specular, diffuse
		const cosTheta = wi.dot( halfVector );
		const theta = Math.acos( cosTheta );
		const F = schlickFresnel( wi.dot( halfVector ), 0.16 );
		const D = ggxDistribution( theta, roughness );
		const G = ggxShadowMaskG2( wi, wo, roughness );

		// specular contribution
		tempSpecularColor
			.set( 0xffffff )
			.multiplyScalar( F * G * D / ( 4 * wo.z * wi.z ) );

		tempMetallicColor
			.copy( tempSpecularColor )
			.multiply( color );

		// diffuse contribution
		tempDiffuseColor
			.copy( color )
			.multiplyScalar( ( 1.0 - metalness ) * ( 1.0 - F ) / Math.PI );

		targetColor
			.lerpColors( tempSpecularColor, tempMetallicColor, metalness )
			.add( tempDiffuseColor );

	}

}

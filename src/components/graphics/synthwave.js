import React, { useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'

/**
 * Ground for the Synthwave scene
 * @param {{timescale: number}} props 
 * timescale: the time scale/speed of the animation
 * @returns an R3F mesh component of the ground
 */
function Ground(props) {
	/**
	 * Custom GLSL Shader material
	 * Uniforms: u_time Used to change the W of the 4D noise
	 * Alternatively: changes Y coordinate of noise to replicate waves/movement
	 * Vertex Shader: Handles Perlin noise displacement
	 * Fragment Shader: Handles tri to quad wireframe calculation
	 */
	const GroundShaderMaterial = {
		uniforms: {
			u_time: { type: "f", value: 0 } 
		},
		vertexShader: '',
		fragmentShader: ''
	}

	const groundMesh = useRef()
	useFrame(({ clock }) => { // Varies the shader's time uniform
		groundMesh.current.material.uniforms.u_time.value = clock.oldTime * props.timescale
	})

	return (
		<mesh>
			<planeBufferGeometry args={[2, 2, 4, 4]} />
			{/* Test wireframe material */}
			{/* <meshBasicMaterial wireframe={true} /> */} 

			{/* Custom shader material */}
			<shaderMaterial attach="material" args={[GroundShaderMaterial]} />
		</mesh>
	)
}

function Sun(props) {
	const SunShaderMaterial = {
		uniforms: {
			u_time: { type: "f", value: 0 }
		},
		vertexShader: '',
		fragmentShader: ''
	}

	const sunMesh = useRef()
	useFrame(({ clock }) => {
		sunMesh.current.material.uniforms.u_time.value = clock.oldTime * props.timescale
	})

	return (
		<mesh>
			<circleGeometry args={[5, 32]} position={[-20, 0, -20]} />
			<shaderMaterial attach="material" args={[SunShaderMaterial]} />
		</mesh>
	)
}

/**
 * Synthwave scene component including all inner objects
 * @param {*} props JSX properties (none recognized)
 * @returns a React Component of the R3F Canvas
 */
function SynthwaveScene(props) {
	return (<div className="RenderCanvas">
		<Canvas>
			<Ground timescale={0.0001}/>
		</Canvas>
	</div>)
}

export default SynthwaveScene
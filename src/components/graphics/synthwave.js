import React, { useRef } from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { EffectComposer, Bloom, Scanline, ChromaticAberration } from '@react-three/postprocessing'


import GroundShaderMaterial from './shaders/synthwaveGround'

/**
 * Ground for the Synthwave scene
 * @param {{timescale: number}} props 
 * timescale: the time scale/speed of the animation
 * @returns an R3F mesh component of the ground
 */
function Ground(props) {
	const groundMesh = useRef()
	useFrame(({ clock }) => { // Varies the shader's time uniform
		groundMesh.current.material.uniforms.u_time.value = clock.oldTime * props.timescale
	})

	return (
		<mesh ref={groundMesh}
			position={[0, -2, 0]}
			rotation={[-70, 0, 0]}
		>
			<planeGeometry args={[30, 30, 16, 16]}/>
			{/* <sphereGeometry /> */}
			{/* Test wireframe material */}
			{/* <meshBasicMaterial wireframe={true} />  */}

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
			<Ground timescale={0.0002}/>
			<EffectComposer>
				<ChromaticAberration />
				<Bloom luminanceThreshold={0} luminanceSmoothing={1} height={1000} />
				<Scanline />
			</EffectComposer>
		</Canvas>
	</div>)
}

export default SynthwaveScene
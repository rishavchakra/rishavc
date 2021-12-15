import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { EffectComposer, Bloom, Scanline, ChromaticAberration } from '@react-three/postprocessing'


import GroundShaderMaterial from './shaders/synthwaveGround'
import SunShaderMaterial from './shaders/synthwaveSun'

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
			position={[0, 0, 0]}
			rotation={[-Math.PI/2, 0, 0]}
		>
			<planeGeometry args={[30, 90, 20, 60]}/>
			{/* Custom shader material */}
			<shaderMaterial attach="material" args={[GroundShaderMaterial]} />
		</mesh>
	)
}

function Sun(props) {
	const sunMesh = useRef()
	useFrame(({ clock }) => {
		sunMesh.current.material.uniforms.u_time.value = clock.oldTime * props.timescale
	})

	return (
		<mesh ref={sunMesh}
			position={[0, 7, 50]}
			rotation={[0, Math.PI, 0]} // Inverts the circle to face the right direction (why is it faced the wrong way by default?)
		>
			<circleGeometry args={[12, 32]}/>
			{/* <meshBasicMaterial/> */}
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
	return (<div className="h-full">
		<Canvas
			camera={{
				position: [0, 3, -15]
			}}
			className="h-full"
		>
			<Sun timescale={0.0005} />
			<Ground timescale={0.0002}/>
			<EffectComposer>
				<Bloom luminanceThreshold={0.1} height={1000} width={900} />
				<ChromaticAberration />
				<Scanline opacity={0.5} density={8.5}/>
			</EffectComposer>
		</Canvas>
	</div>)
}

export default SynthwaveScene
import noise4D from "./noise"
/**
 * Custom GLSL Shader material
 * Uniforms: u_time Used to change the W of the 4D noise
 * Alternatively: changes Y coordinate of noise to replicate waves/movement
 * Vertex Shader: Handles Perlin noise displacement
 * Fragment Shader: Handles tri to quad wireframe calculation
 */
 const GroundShaderMaterial = {
	uniforms: {
		u_time: { type: "f", value: 0 },
	},
	vertexShader: noise4D + `
		precision mediump float;
		varying vec2 vUv;
		varying vec3 barycentric_coords;
		uniform float u_time;

		float height_curve(float x) {
			return 0.;
		}

		void main() {
			vUv = uv;
			float displacement = snoise( vec4(position, u_time) );
			vec3 disp_position = position + vec3(0., 0., displacement );
			gl_Position = projectionMatrix * modelViewMatrix * vec4(disp_position, 1.0);
		}
	`,
	fragmentShader: `
		varying vec2 vUv;
		varying vec3 barycentric_coords;
		const float width = 0.06;
		const float hw = 0.03;
		const float hwcomp = 0.97;

		void main() {
			vec2 uv_grid = mod( vUv * 16.0, 1.0 );
			float wire = float(
				uv_grid.x < hw || uv_grid.x > hwcomp ||
				uv_grid.y < hw || uv_grid.y > hwcomp
			);
			vec3 color = vec3(wire, wire, wire);
			gl_FragColor = vec4(color, 1.0);
		}
	`
}

export default GroundShaderMaterial
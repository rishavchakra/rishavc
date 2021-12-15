import noise4D from "./noise"
/**
 * Custom GLSL Shader material
 * Uniforms: u_time Used to change the W of the 4D noise
 * Vertex Shader: Handles Perlin noise displacement
 * Fragment Shader: Handles tri to quad wireframe calculation
 */
 const GroundShaderMaterial = {
	uniforms: {
		u_time: { type: "f", value: 0 },
	},
	vertexShader: noise4D + `
		precision mediump float;

		uniform float u_time;

		varying vec2 vUv; // UV coordinates
		varying float vNoiseDisp;

		// Witch of Agnesi function, not used in current implementation
		float agnesi(float x, float exp) {
			return 1.0 / (1.0 + pow(x, exp));
		}

		float height_curve(float x) {
			float center = abs(x - 0.5);
			return pow( abs(center * -10.0), 1.4);
			// return center * 20.0 * agnesi(center * 2.0, 2.4);
			// return -1.0 * sin(center / 360.0) / center; // creates weird gap
		}

		void main() {
			vUv = uv;
			
			vNoiseDisp = snoise( vec4(position, u_time) ) * 0.8;
			float hills_displacement = snoise( vec4(position / 10.0, u_time / 16.0) ) + 1.0;
			float adj_hills_displacement = height_curve(vUv.x) * hills_displacement;

			vec3 disp_position = position + vec3(0., 0., vNoiseDisp + adj_hills_displacement );
			gl_Position = projectionMatrix * modelViewMatrix * vec4(disp_position, 1.0);
		}
	`,
	fragmentShader: `
		varying vec2 vUv;
		varying float vNoiseDisp;

		const float wire_width = 0.06;
		const float wire_hw = 0.03;
		const float wire_hwcomp = 0.97;

		const float num_verts_w = 20.0; // Number of horizontal vertices
		const float num_verts_d = 60.0; // Number of depth vertices

		const vec3 col1 = vec3(1.0, 0.54509, 0.349019); // Pinkish color
		const vec3 col2 = vec3(1.0, 0.349, 0.6); // Orange color

		void main() {
			vec2 uv_grid = mod( vec2(vUv.x * num_verts_w, vUv.y * num_verts_d), 1.0 );
			float wire = float(
				uv_grid.x < wire_hw || uv_grid.x > wire_hwcomp ||
				uv_grid.y < wire_hw || uv_grid.y > wire_hwcomp
			);

			float col_mix_fac = clamp(vNoiseDisp / 0.8, 0., 1.);
			vec3 color = wire * (col_mix_fac * col1 + (1.-col_mix_fac) * col2);
			gl_FragColor = vec4(color, 1.0);
		}
	`
}

export default GroundShaderMaterial
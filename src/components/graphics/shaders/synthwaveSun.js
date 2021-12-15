/**
 * Custom GLSL Shader material
 * Uniforms: u_time Used to change the size and position of the stripes
 * Vertex Shader: No vertex manipulation
 * Fragment Shader: Draws gradient and stripes
 */
 const SunShaderMaterial = {
	uniforms: {
		u_time: { type: "f", value: 0 },
	},
	vertexShader: `
		precision mediump float;

		varying vec2 vUv; // UV coordinates

		void main() {
			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
		}
	`,
	fragmentShader: `
		uniform float u_time;

		varying vec2 vUv;

		const float num_stripes = 8.;
		const vec3 col1 = vec3(1.0, 0.28627, 0.26274); // Pinkish color
		const vec3 col2 = vec3(1.0, 0.72941, 0.4); // Orange color

		float map(float x_inp, float from_min, float from_max, float to_min, float to_max, bool should_clamp) {
			float slope = (to_max - to_min) / (from_max - from_min);
			float result = to_min + (slope * (x_inp - from_min));

			float fac = float(should_clamp);
			return (fac * clamp(result, 0., 1.)) + ((1.-fac) * result);
		}

		void main() {
			float stripe_size = map(vUv.y, 0., 0.7, 0.6, 0., true);
			float stripes = float(mod(vUv.y * num_stripes - u_time, 1.) > stripe_size);

			float gradient = map(vUv.y, 0.3, 1., 0., 1., true); // what?
			vec3 color = (gradient * col2) + ((1.-gradient) * col1);

			gl_FragColor = vec4(color * stripes, 1.0);
		}
	`
}

export default SunShaderMaterial
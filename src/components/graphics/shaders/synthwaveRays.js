/**
 * Custom GLSL Shader material
 * Uniforms: u_time Used to change the size and position of the stripes
 * Vertex Shader: No vertex manipulation
 * Fragment Shader: Draws gradient and stripes
 */
const RaysShaderMaterial = {
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

		const float pi = 3.14159265;

		const float numRays = 4.;
		const float rayWidth = 0.5;
		const float rayLength = 0.45;
		const float rayLengthAdj = 0.45;
		const float rayFade = 0.45;
		const vec3 rayColor = vec3(1., 1., 0.);
		const float rayAlpha = 0.25;

		float distance(float x, float y) {
			return sqrt(x * x + y * y);
		}

		float map(float x_inp, float from_min, float from_max, float to_min, float to_max, bool should_clamp) {
			float slope = (to_max - to_min) / (from_max - from_min);
			float result = to_min + (slope * (x_inp - from_min));

			float fac = float(should_clamp);
			return (fac * clamp(result, 0., 1.)) + ((1.-fac) * result);
		}

		void main() {
			vec2 center = vUv - 0.5;
			float r = distance(center.x, center.y);
			float sign = (sign(center.y) + 1.0)/2.0;
			float a = acos(center.x/r);
			float theta = ( (sign * (2. * pi - a)) + ((1. - sign) * a) ) / pi;
			float theta_strips = float( mod(theta * numRays, 1.0) < rayWidth );
			// constant fac(number) per strip
			float fac_per_strip = theta * numRays - mod(theta * numRays, 1.0);
			// pseudo-randomize per strip based on the factor
			float rand_per_strip = abs(sin(fac_per_strip * 100.0 + u_time));

			float r_norm = r * 2.;
			float dist_per_strip = rayLength + rand_per_strip * rayLengthAdj;
			float wedge_per_strip = float(r_norm < dist_per_strip);
			float fade_per_strip = map(r_norm, dist_per_strip - rayFade, dist_per_strip, 1., 0., true);

			float rays_fac = fade_per_strip * theta_strips;
			// vec3 color =

			gl_FragColor = vec4(rayColor, rays_fac * rayAlpha);
		}
	`
}

export default RaysShaderMaterial
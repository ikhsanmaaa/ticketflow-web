export const fragmentShader = /* glsl */ `
precision highp float;

varying vec2 vUv;

uniform float t;
uniform float aspect;

/* GMF brand palette */
const vec3 WHITE = vec3(1.0);
const vec3 BLUE  = vec3(0.369, 0.620, 0.839); /* #5e9ed6 */
const vec3 TEAL  = vec3(0.208, 0.557, 0.616); /* #358e9d */
const vec3 GREEN = vec3(0.494, 0.737, 0.255); /* #7ebc41 */

float blob(vec2 p, vec2 c, float r) {
  float d = length(p - c);
  return exp(-d * d / (r * r));
}

void main() {
  vec2 uv = vUv;
  uv.x *= aspect;

  /* blobs orbit the screen edges clockwise, small radius, brisk drift */
  const float TAU = 6.2831853;
  vec2 ctr = vec2(aspect * 0.5, 0.5);
  vec2 rad = vec2(aspect * 0.54, 0.54); /* ride near the border */
  float a = -t * 0.9; /* negative = clockwise on screen */

  vec2 pG  = ctr + rad * vec2(cos(a),                sin(a));                /* green */
  vec2 pT  = ctr + rad * vec2(cos(a + TAU * 0.33),   sin(a + TAU * 0.33));   /* teal  */
  vec2 pB  = ctr + rad * vec2(cos(a + TAU * 0.66),   sin(a + TAU * 0.66));   /* blue  */
  vec2 pT2 = ctr + rad * vec2(cos(a + TAU * 0.5),    sin(a + TAU * 0.5));    /* teal  */

  float R = 0.30; /* small tight blink */
  float bG  = blob(uv, pG,  R);
  float bT  = blob(uv, pT,  R);
  float bB  = blob(uv, pB,  R * 0.9);
  float bT2 = blob(uv, pT2, R * 0.85);

  vec3 col = WHITE;
  col = mix(col, GREEN, clamp(bG  * 0.60, 0.0, 1.0));
  col = mix(col, TEAL,  clamp(bT  * 0.58, 0.0, 1.0));
  col = mix(col, TEAL,  clamp(bT2 * 0.45, 0.0, 1.0));
  col = mix(col, BLUE,  clamp(bB  * 0.32, 0.0, 1.0)); /* blue kept subtle */

  gl_FragColor = vec4(col, 1.0);
}
`;

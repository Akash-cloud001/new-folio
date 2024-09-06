// uniform mat4 projectionMatrx;
// uniform mat4 viewMatrix;
// uniform mat4 modelMatrix;
// attribute vec3 position;

uniform float uBendFactor;
uniform vec2 uFreq;
uniform float uTime;

varying vec2 vUv;
varying float vElevation;
void main(){
    // Get the position of each vertex
  vec3 newPosition = position;

  newPosition.z -= uBendFactor * pow(newPosition.x, 2.0);
  float elevation = sin(newPosition.x * uFreq.x - uTime) * 0.1;
  elevation = sin(newPosition.y * uFreq.y - uTime) * 0.1;
  newPosition.z += elevation;
  newPosition.z += sin(newPosition.x * uFreq.x + uTime) * 0.15;
  newPosition.z += sin(newPosition.y * uFreq.y + uTime) * 0.2;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);

vUv = uv;
vElevation = elevation;
}
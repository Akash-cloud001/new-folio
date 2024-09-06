// precision mediump float;
uniform sampler2D uTexture;
varying float vElevation;
varying vec2 vUv;
void main(){
     // Invert texture coordinates if necessary
    vec2 correctedUv = vec2(1.0 - vUv.x, vUv.y); // Invert along X axis
    // or
    // vec2 correctedUv = vec2(vUv.x, 1.0 - vUv.y); // Invert along Y axis

    vec4 textureColor = texture2D(uTexture, correctedUv);
    gl_FragColor = textureColor;
}



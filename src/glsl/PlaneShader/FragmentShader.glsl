varying vec2 vUv;

uniform float gridFrequency;
uniform float lineThickness;
uniform vec3 gridColor;
uniform vec3 backgroundColor;

void main() {
    // Scale UVs based on grid frequency
    vec2 grid = fract(vUv * gridFrequency);
    
    // Calculate distance to grid lines
    vec2 gridDist = abs(grid - 0.5);
    
    // Create lines
    vec2 lines = smoothstep(0.0, lineThickness, gridDist);
    
    // Combine horizontal and vertical lines
    float line = min(lines.x, lines.y);
    
    // Mix between grid color and background color
    vec3 finalColor = mix(gridColor, backgroundColor, line);
    
    gl_FragColor = vec4(finalColor, 1.0);
}
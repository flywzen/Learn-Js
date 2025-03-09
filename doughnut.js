// Import Three.js library
import * as THREE from 'three';

// Create a scene
const scene = new THREE.Scene();

// Create a camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Create a renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create a geometry for the donut (torus)
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);

// Create a material for the donut
const material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: true });

// Create a mesh from the geometry and material
const donut = new THREE.Mesh(geometry, material);

// Add the donut to the scene
scene.add(donut);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotate the donut
    donut.rotation.x += 0.01;
    donut.rotation.y += 0.01;

    // Render the scene
    renderer.render(scene, camera);
}

// Start the animation loop
animate();

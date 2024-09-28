const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

const loader = new THREE.GLTFLoader();
loader.load('public/assets/models/clasica.glb', function (gltf) {
    scene.add(gltf.scene);
    camera.position.z = 5;
    animate();
});

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

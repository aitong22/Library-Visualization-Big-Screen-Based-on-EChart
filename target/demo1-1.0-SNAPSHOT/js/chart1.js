// import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.114/build/three.module.js';
// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.114/examples/jsm/loaders/GLTFLoader.js';
// import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.114/examples/jsm/controls/OrbitControls.js';
import * as THREE from './3rd/three.module.js';
import { GLTFLoader } from './3rd/GLTFLoader.js';
import { OrbitControls } from './3rd/OrbitControls.js';

const div = document.getElementById("chart1-3d");
const width = div.clientWidth;
const height = div.clientHeight;
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
camera.position.set(0, 80, 80);
camera.fov=3000;

const renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
renderer.setClearColor(0x000000, 0);
renderer.setSize(width, height);

div.appendChild(renderer.domElement);

const ambientLight = new THREE.AmbientLight(0xffffff, 1);
scene.add(ambientLight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = false;

const loader = new GLTFLoader();
loader.load('data/road.glb', function(gltf) {
    scene.add(gltf.scene);

    const animations = gltf.animations;
    if (animations && animations.length) {
        const mixer = new THREE.AnimationMixer(gltf.scene);
        animations.forEach(clip => {
            mixer.clipAction(clip).play();
        });

        function animate() {
            requestAnimationFrame(animate);
            mixer.update(0.008);
            renderer.render(scene, camera);
        }

        animate();
    }
}, undefined, function(error) {
    console.error(error);
});

// 渲染函数
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    scene.rotateY(0.0004)
}
animate();
// 响应窗口大小更改
window.addEventListener('resize', function() {
    const newWidth = div.clientWidth;
    const newHeight = div.clientHeight;

    camera.aspect = newWidth / newHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(newWidth, newHeight);
});
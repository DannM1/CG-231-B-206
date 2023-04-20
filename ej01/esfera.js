var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

//Escenario, camara y render
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);



const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);

var R = 1;

// Crear la esfera
const geometry = new THREE.SphereGeometry(R, 15, 15);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const sphere = new THREE.Mesh(geometry, material);
scene.add(sphere);

Sx = sphere.scale.x = 0.5;
Sy = sphere.scale.y = 0.5;
Sz = sphere.scale.z = 3;

sphere.rotation.x += -60*Math.PI /180;
sphere.rotation.y += 30*Math.PI /180;
sphere.rotation.z += 60*Math.PI /180;



sphere.position.set(1,2,1);

const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
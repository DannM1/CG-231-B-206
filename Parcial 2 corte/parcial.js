var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

//Escenario, luz, camara y render
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

const light = new THREE.PointLight(0xffffff, 1, 100);
light.position.set(-2, 0, 10);
scene.add(light);

//Parametrizar variables
var R = 1;
var Sx = 0.5;
var Sy = 0.5;
var Sz = 3;
var Rx = 1.05;
var Ry = 0.52;
var Rz = 1.05;
var Tx = 1.5;
var Ty = 2.2;
var Tz = 1.3;

// Crear la esfera
const geometry = new THREE.SphereGeometry(R, 15, 15);
const material = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
const esfera = new THREE.Mesh(geometry, material);
scene.add(esfera);

//Función de escalado
esfera.scale.x = Sx;
esfera.scale.y = Sy;
esfera.scale.z = Sz;

//Función de Rotación 
esfera.rotation.x += -Rx;
esfera.rotation.y += Ry;
esfera.rotation.z += Rz;

//Funcion de Translación
esfera.position.set(Tx,Ty, Tz);

//Ejes primarios XYZ
const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

//Rejilla plano horizontal
const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
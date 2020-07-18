const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

init();

function createScene() {
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);
  camera.position.z = 5;
}


function createBox() {
  var geometry = new THREE.BoxGeometry();
  var material = new THREE.MeshBasicMaterial({
    color: 0x00ff00
  });
  var cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  return cube;
}

function animateCube(cube){
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
}

function init() {
  createScene();
  var isRot = false;
  var cube = createBox();
  document.addEventListener("click",function(){
    isRot = !isRot;
  });
  var animate = function() {
    requestAnimationFrame(animate);
    if(isRot){
      animateCube(cube);
    }
    renderer.render(scene, camera);
  };
  animate();
}

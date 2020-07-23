init();

function init(){
	const canvas = document.querySelector('#container');
	const renderer = new THREE.WebGLRenderer({canvas});
	const scene = new THREE.Scene();
	const camera = createCamera();
	const cube = createCube();

	scene.add(cube);

	var position = { x : 0, y: 0 };
	var target = { x : 1, y: 0 };
	var tween = new TWEEN.Tween(position).to(position,5000);

	tween.onUpdate(function(){
    cube.position.x = position.x;
    cube.position.y = position.y;
	});
	tween.start();
	var animate = function() {
    requestAnimationFrame(animate);
		tween.to({x:-3})
    render(renderer, scene, camera);
  };
  animate();
	// render(renderer, scene, camera);
}
function render(renderer, scene, camera){
	renderer.render(scene, camera);

	TWEEN.update();
}
function createCube(){
	const boxWidth = 1;
	const boxHeight = 1;
	const boxDepth = 1;
	const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
	const material = new THREE.MeshBasicMaterial({color: 0x44aa88});
	const cube = new THREE.Mesh(geometry, material);

	return cube;
}
function createCamera(){
	const fov = 75;
	const aspect = 2;  // the canvas default
	const near = 0.1;
	const far = 5;
	const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

	camera.position.z = 2;

	return camera;
}

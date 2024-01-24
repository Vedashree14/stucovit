import * as THREE from 'https://cdn.skypack.dev/three@0.133.0/build/three.module.js'
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'https://cdn.skypack.dev/three@0.133.0/examples/jsm/controls/OrbitControls.js';

const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;

const canvas = document.querySelector('.webgl')
const scene =  new THREE.Scene()

//new
let clock, mixer, model
clock = new THREE.Clock()
//new

const loader = new GLTFLoader()
loader.load('assets/sportswhite.glb', function(glb){

    //new
    model = glb
  mixer = new THREE.AnimationMixer(glb.scene)
  mixer.clipAction(glb.animations[0]).play()
  scene.add(model.scene)
    //new

    console.log(glb)
    const root = glb.scene;
    scene.add(root);
}, function(xhr){
    console.log((xhr.loaded/xhr.total*100) + "% loaded")
}, function(error){
    console.log('An error occurred')
})

//const ambientLight = new THREE.AmbientLight(0xffffff);
//scene.add(ambientLight);



const light = new THREE.DirectionalLight(0xffffff, 1)
light.position.set(3,-1,14)
scene.add(light)

//const pointLight = new THREE.PointLight(0xffffff, 5, 1);
//pointLight.position.set(10, 1, 1); // Set the position of the light
//scene.add(pointLight);



//Boiler Plate Code
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

var renderer = new THREE.WebGLRenderer({
  canvas: canvas,
  antialias: true,
alpha: true
  
})

const camera = new THREE.PerspectiveCamera(10, sizes.width/sizes.height, 0.1, 100)

camera.position.set(0.31,0.5,16)


scene.add(camera)




renderer.setClearColor( 0x000000, 0 )
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.shadowMap.enabled = true
renderer.outputEncoding = THREE.sRGBEncoding


//move model with mouse

  //new 
  class CameraOrientationState {
    constructor() {
      this.pitchAngle = 0;
      this.yawAngle = 0;
      this.startingPitchAngleForCurrentCoordinates = 0;
      this.startingYawAngleForCurrentCoordinates = 0;
      this.previousPitchAngle = 0;
      this.previousYawAngle = 0;
      this.lastMouseMoveTime = 0;
      this.movementDuration = 100;
    }
  }
  

  export const handleMouseMovement = (mouseX, mouseY, cameraOrientationState) => {
    const now = performance.now() 

    cameraOrientationState.lastMouseMoveTime = now;

    const rotationScale = 0.003;

    cameraOrientationState.pitchAngle = -(mouseY * rotationScale) * Math.PI; //Remove negative if mouse rotation is inverted
    cameraOrientationState.yawAngle = -(mouseX * rotationScale) * Math.PI; //Remove negative if mouse rotation is inverted

    cameraOrientationState.startingPitchAngleForCurrentCoordinates = cameraOrientationState.previousPitchAngle;
    cameraOrientationState.startingYawAngleForCurrentCoordinates = cameraOrientationState.previousYawAngle;
    
}

export const handleCameraRotation = (camera, cameraOrientationState) => {
    const now = performance.now()
  
    const timeElapsed = now - cameraOrientationState.lastMouseMoveTime

    if( timeElapsed < cameraOrientationState.movementDuration){

        const timeLeftPercentage = timeElapsed / cameraOrientationState.movementDuration;
        const minimumDegreeOfChange = 0.05;
        
        // Calculate the interpolation factor based on the time elapsed since the last mouse movement
        let interpolationFactor = Math.max(timeLeftPercentage, minimumDegreeOfChange); 

        // Linearly interpolate the pitch and yaw angles
        const interpolatedPitchAngle = (1 - interpolationFactor) * cameraOrientationState.startingPitchAngleForCurrentCoordinates + interpolationFactor * cameraOrientationState.pitchAngle; //The max value for t will be one, since the time elapsed is the amount of time since the last update. And t will never be more than 1. It goes from 0 to 1 sort of like 0% of elapsed time cycle to 100%
        const interpolatedYawAngle = (1 - interpolationFactor) * cameraOrientationState.startingYawAngleForCurrentCoordinates + interpolationFactor * cameraOrientationState.yawAngle;
        

        camera.rotation.x = interpolatedPitchAngle;
        camera.rotation.y = interpolatedYawAngle;

        // update the previous pitch and yaw angles
        cameraOrientationState.previousPitchAngle = interpolatedPitchAngle;
        cameraOrientationState.previousYawAngle = interpolatedYawAngle;
        
    }
}

const mouse = new THREE.Vector2();

//Set up the default cameraOrientationStateObject
let cameraOrientationState = new CameraOrientationState();

//A function to be called every time the mouse moves
function onMouseMove(event) {
  mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  mouse.y = (event.clientY / window.innerHeight) * 2 - 1;

  handleMouseMovement(mouse.x, mouse.y, cameraOrientationState);
}

function onTouchMove(event) {
  const touch = event.touches[0];
  mouse.x = (touch.clientX / window.innerWidth) * 1 - 1;
  mouse.y = (touch.clientY / window.innerHeight) * 1 - 1;
  handleMouseMovement(mouse.x, mouse.y, cameraOrientationState);
}

//Add listener to call onMouseMove every time the mouse moves in the browser window
document.addEventListener('mousemove', onMouseMove, false);

if (isTouchDevice) {
  document.addEventListener('touchmove', onTouchMove, false);
}

// Adjust the canvas size and renderer size based on the device's screen size
function updateSizes() {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  renderer.setSize(sizes.width, sizes.height);
}

window.addEventListener('resize', () => {
  updateSizes();
  handleCameraRotation(camera, cameraOrientationState);
});

updateSizes();

function animate() {
    requestAnimationFrame(animate)
    if (mixer) {
      mixer.update(clock.getDelta())
    }
    handleCameraRotation(camera, cameraOrientationState);
  
    renderer.render(scene, camera)
  }
  animate();





  

//countdown js



  const isSmallScreen = sizes.width < 768; // Adjust the threshold as needed

  // Adjust the scale of the model for smaller screens
  if (isSmallScreen && model) {
    model.scene.scale.set(0.5, 0.5, 0.5); // Adjust the scale as needed
  } else if (model) {
    model.scene.scale.set(1, 1, 1); // Reset the scale for larger screens
  }



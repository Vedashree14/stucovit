function getCurrentScreenSize() {
  console.log("Zale kama aata zopa");
}

// if (screenWidth <= 600) {
//   function redirectToIndex() {
//     window.location.href = "index1.html";
//   }
//   function redirectToAbout() {
//     window.location.href = "About.html";
//   }
//   if (!sessionStorage.getItem("redirected")) {
//     setTimeout(function () {
//       redirectToIndex();
//     }, 3000);

//     sessionStorage.setItem("redirected", "true");
//   }

//   function myFunction() {
//     var x = document.getElementById("nav");
//     if (x.className === "topnav") {
//       x.className += " responsive";
//     } else {
//       x.className = "topnav";
//     }
//   }
//   function redirectToAnotherWebsite() {
//     window.location.href = "About.html";
//   }
// }
// else {
//   Shery.imageEffect("#back", {
//     style: 4,
//     config: {
//       uColor: { value: false },
//       uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
//       uAmplitude: { value: 1.5, range: [0, 5] },
//       uFrequency: { value: 3.5, range: [0, 10] },
//       geoVertex: { range: [1, 64], value: 32 },
//       zindex: { value: -9996999, range: [-9999999, 9999999] },
//       aspect: { value: 1.92964824120603 },
//       ignoreShapeAspect: { value: true },
//       shapePosition: { value: { x: 0, y: 0 } },
//       shapeScale: { value: { x: 0.5, y: 0.5 } },
//       shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
//       shapeRadius: { value: 0, range: [0, 2] },
//       currentScroll: { value: 0 },
//       scrollLerp: { value: 0.07 },
//       gooey: { value: true },
//       infiniteGooey: { value: true },
//       growSize: { value: 3.35, range: [1, 15] },
//       durationOut: { value: 1, range: [0.1, 5] },
//       durationIn: { value: 1.5, range: [0.1, 5] },
//       displaceAmount: { value: 0.5 },
//       masker: { value: false },
//       maskVal: { value: 1, range: [1, 5] },
//       scrollType: { value: 0 },
//       noEffectGooey: { value: true },
//       onMouse: { value: 1 },
//       noise_speed: { value: 1.45, range: [0, 10] },
//       metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
//       discard_threshold: { value: 0.63, range: [0, 1] },
//       antialias_threshold: { value: 0.07, range: [0, 0.1] },
//       noise_height: { value: 0.47, range: [0, 2] },
//       noise_scale: { value: 16.03, range: [0, 100] },
//     },
//     gooey: true,
//   });
// }

Shery.imageEffect("#back", {
  style: 4,
  config: {
    uColor: { value: false },
    uSpeed: { value: 0.6, range: [0.1, 1], rangep: [1, 10] },
    uAmplitude: { value: 1.5, range: [0, 5] },
    uFrequency: { value: 3.5, range: [0, 10] },
    geoVertex: { range: [1, 64], value: 32 },
    zindex: { value: -9996999, range: [-9999999, 9999999] },
    aspect: { value: 1.92964824120603 },
    ignoreShapeAspect: { value: true },
    shapePosition: { value: { x: 0, y: 0 } },
    shapeScale: { value: { x: 0.5, y: 0.5 } },
    shapeEdgeSoftness: { value: 0, range: [0, 0.5] },
    shapeRadius: { value: 0, range: [0, 2] },
    currentScroll: { value: 0 },
    scrollLerp: { value: 0.07 },
    gooey: { value: true },
    infiniteGooey: { value: true },
    growSize: { value: 3.35, range: [1, 15] },
    durationOut: { value: 1, range: [0.1, 5] },
    durationIn: { value: 1.5, range: [0.1, 5] },
    displaceAmount: { value: 0.5 },
    masker: { value: false },
    maskVal: { value: 1, range: [1, 5] },
    scrollType: { value: 0 },
    noEffectGooey: { value: true },
    onMouse: { value: 1 },
    noise_speed: { value: 1.45, range: [0, 10] },
    metaball: { value: 0.2, range: [0, 2], _gsap: { id: 3 } },
    discard_threshold: { value: 0.63, range: [0, 1] },
    antialias_threshold: { value: 0.07, range: [0, 0.1] },
    noise_height: { value: 0.47, range: [0, 2] },
    noise_scale: { value: 16.03, range: [0, 100] },
  },
  gooey: true,
});

function redirectToIndex() {
  window.location.href = "index1.html";
}
function redirectToAbout() {
  window.location.href = "About.html";
}
if (!sessionStorage.getItem("redirected")) {
  setTimeout(function () {
    redirectToIndex();
  }, 3000);

  sessionStorage.setItem("redirected", "true");
}

function myFunction() {
  var x = document.getElementById("nav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
  // console.log("Hi There");
}
function redirectToAnotherWebsite() {
  window.location.href = "About.html";
}
// var names = document.querySelectorAll(".name");

// names.forEach(function(name){
//     var h1s = name.querySelectorAll("h1")
//     var index = 0;
//     var animating = false;

//     document.querySelector("#main").addEventListener("click",function(){
//         if(!animating){
//             animating= true;
//             gsap.to(h1s[index],{
//                 top: '-=100%',
//                 ease: Expo.easeInOut,
//                 duration: 1,
//                 onComplete:function(){
//                     gsap.set(this._targets[0], {top:"100%"});
//                     animating = false;
//                 },
//              });

//             index === h1s.length - 1 ? (index = 0): index++;

//              gsap.to(h1s[index],{
//                 top: '-=100%',
//                 ease: Expo.easeInOut,
//                 duration: 1,
//              });
//         }
// });
// })

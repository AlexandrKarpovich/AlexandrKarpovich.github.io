// var colors = new Array(
//   [62,35,255],
//   [60,255,60],
//   [255,35,98],
//   [45,175,230],
//   [255,0,255],
//   [255,128,0]);
//
// var step = 0;
// //color table indices for:
// // current color left
// // next color left
// // current color right
// // next color right
// var colorIndices = [0,1,2,3];
//
// //transition speed
// var gradientSpeed = 0.002;
//
// function updateGradient()
// {
//
//   if ( $===undefined ) return;
//
// var c0_0 = colors[colorIndices[0]];
// var c0_1 = colors[colorIndices[1]];
// var c1_0 = colors[colorIndices[2]];
// var c1_1 = colors[colorIndices[3]];
//
// var istep = 1 - step;
// var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
// var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
// var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
// var color1 = "rgb("+r1+","+g1+","+b1+")";
//
// var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
// var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
// var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
// var color2 = "rgb("+r2+","+g2+","+b2+")";
//
//  $('#gradient').css({
//    background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
//     background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
//
//   step += gradientSpeed;
//   if ( step >= 1 )
//   {
//     step %= 1;
//     colorIndices[0] = colorIndices[1];
//     colorIndices[2] = colorIndices[3];
//
//     //pick two new target color indices
//     //do not pick the same as the current one
//     colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
//     colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
//
//   }
// }
//
// setInterval(updateGradient,20);
//
// /* ---- particles.js config ---- */
//
// particlesJS("particles-js", {
//   "particles": {
//     "number": {
//       "value": 380,
//       "density": {
//         "enable": true,
//         "value_area": 800
//       }
//     },
//     "color": {
//       "value": ["#3E23FF", "#3CFF3C", "#FF2362", "#2DAFE6", "#FF00FF", "#FF8000"]
//     },
//     "shape": {
//       "type": "circle",
//       "stroke": {
//         "width": 0.1,
//         "color": ["#fff"]
//       },
//       "polygon": {
//         "nb_sides": 3
//       },
//       "image": {
//         "src": "img/github.svg",
//         "width": 100,
//         "height": 100
//       }
//     },
//     "opacity": {
//       "value": 0.8,
//       "random": false,
//       "anim": {
//         "enable": true,
//         "speed": 1,
//         "opacity_min": 0.1,
//         "sync": false
//       }
//     },
//     "size": {
//       "value": 3,
//       "random": true,
//       "anim": {
//         "enable": false,
//         "speed": 40,
//         "size_min": 0.1,
//         "sync": false
//       }
//     },
//     "line_linked": {
//       "enable":false,
//       "distance": 150,
//       "color": "#ffffff",
//       "opacity": 0.4,
//       "width": 1
//     },
//     "move": {
//       "enable": true,
//       "speed": 6,
//       "direction": "none",
//       "random": true,
//       "straight": false,
//       "out_mode": "out",
//       "bounce": false,
//       "attract": {
//         "enable": false,
//         "rotateX": 600,
//         "rotateY": 1200
//       }
//     }
//   },
//   "interactivity": {
//     "detect_on": "canvas",
//     "events": {
//       "onhover": {
//         "enable": true,
//         "mode": "bubble"
//       },
//       "onclick": {
//         "enable": true,
//         "mode": "push"
//       },
//       "resize": true
//     },
//     "modes": {
//       "grab": {
//         "distance": 140,
//         "line_linked": {
//           "opacity": 1
//         }
//       },
//       "bubble": {
//         "distance": 200,
//         "size": 20,
//         "duration": 2,
//         "opacity": 0.5,
//         "speed": 3
//       },
//       "repulse": {
//         "distance": 200,
//         "duration": 0.4
//       },
//       "push": {
//         "particles_nb": 4
//       },
//       "remove": {
//         "particles_nb": 2
//       }
//     }
//   },
//   "retina_detect": true
// });

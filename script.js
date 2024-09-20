function loco(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}
loco()


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})


gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`#fff`
})



function canvas(){
    const canvas = document.querySelector("#page3>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./images/frames/frames00007.png
  ./images/frames/frames00010.png
  ./images/frames/frames00013.png
  ./images/frames/frames00016.png
  ./images/frames/frames00019.png
  ./images/frames/frames00022.png
  ./images/frames/frames00025.png
  ./images/frames/frames00028.png
  ./images/frames/frames00031.png
  ./images/frames/frames00034.png
  ./images/frames/frames00037.png
  ./images/frames/frames00040.png
  ./images/frames/frames00043.png
  ./images/frames/frames00046.png
  ./images/frames/frames00049.png
  ./images/frames/frames00052.png
  ./images/frames/frames00055.png
  ./images/frames/frames00058.png
  ./images/frames/frames00061.png
  ./images/frames/frames00064.png
  ./images/frames/frames00067.png
  ./images/frames/frames00070.png
  ./images/frames/frames00073.png
  ./images/frames/frames00076.png
  ./images/frames/frames00079.png
  ./images/frames/frames00082.png
  ./images/frames/frames00085.png
  ./images/frames/frames00088.png
  ./images/frames/frames00091.png
  ./images/frames/frames00094.png
  ./images/frames/frames00097.png
  ./images/frames/frames00100.png
  ./images/frames/frames00103.png
  ./images/frames/frames00106.png
  ./images/frames/frames00109.png
  ./images/frames/frames00112.png
  ./images/frames/frames00115.png
  ./images/frames/frames00118.png
  ./images/frames/frames00121.png
  ./images/frames/frames00124.png
  ./images/frames/frames00127.png
  ./images/frames/frames00130.png
  ./images/frames/frames00133.png
  ./images/frames/frames00136.png
  ./images/frames/frames00139.png
  ./images/frames/frames00142.png
  ./images/frames/frames00145.png
  ./images/frames/frames00148.png
  ./images/frames/frames00151.png
  ./images/frames/frames00154.png
  ./images/frames/frames00157.png
  ./images/frames/frames00160.png
  ./images/frames/frames00163.png
  ./images/frames/frames00166.png
  ./images/frames/frames00169.png
  ./images/frames/frames00172.png
  ./images/frames/frames00175.png
  ./images/frames/frames00178.png
  ./images/frames/frames00181.png
  ./images/frames/frames00184.png
  ./images/frames/frames00187.png
  ./images/frames/frames00190.png
  ./images/frames/frames00193.png
  ./images/frames/frames00196.png
  ./images/frames/frames00199.png
  ./images/frames/frames00202.png
 `;
  return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: .5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()






var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})







function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `
./images/bridges/bridges00004.png
./images/bridges/bridges00007.png
./images/bridges/bridges00010.png
./images/bridges/bridges00013.png
./images/bridges/bridges00016.png
./images/bridges/bridges00019.png
./images/bridges/bridges00022.png
./images/bridges/bridges00025.png
./images/bridges/bridges00028.png
./images/bridges/bridges00031.png
./images/bridges/bridges00034.png
./images/bridges/bridges00037.png
./images/bridges/bridges00040.png
./images/bridges/bridges00043.png
./images/bridges/bridges00046.png
./images/bridges/bridges00049.png
./images/bridges/bridges00052.png
./images/bridges/bridges00055.png
./images/bridges/bridges00058.png
./images/bridges/bridges00061.png
./images/bridges/bridges00064.png
./images/bridges/bridges00067.png
./images/bridges/bridges00070.png
./images/bridges/bridges00073.png
./images/bridges/bridges00076.png
./images/bridges/bridges00079.png
./images/bridges/bridges00082.png
./images/bridges/bridges00085.png
./images/bridges/bridges00088.png
./images/bridges/bridges00091.png
./images/bridges/bridges00094.png
./images/bridges/bridges00097.png
./images/bridges/bridges00100.png
./images/bridges/bridges00103.png
./images/bridges/bridges00106.png
./images/bridges/bridges00109.png
./images/bridges/bridges00112.png
./images/bridges/bridges00115.png
./images/bridges/bridges00118.png
./images/bridges/bridges00121.png
./images/bridges/bridges00124.png
./images/bridges/bridges00127.png
./images/bridges/bridges00130.png
./images/bridges/bridges00133.png
./images/bridges/bridges00136.png
./images/bridges/bridges00139.png
./images/bridges/bridges00142.png
./images/bridges/bridges00145.png
./images/bridges/bridges00148.png
./images/bridges/bridges00151.png
./images/bridges/bridges00154.png
./images/bridges/bridges00157.png
./images/bridges/bridges00160.png
./images/bridges/bridges00163.png
./images/bridges/bridges00166.png
./images/bridges/bridges00169.png
./images/bridges/bridges00172.png
./images/bridges/bridges00175.png
./images/bridges/bridges00178.png
./images/bridges/bridges00181.png
./images/bridges/bridges00184.png
./images/bridges/bridges00187.png
./images/bridges/bridges00190.png
./images/bridges/bridges00193.png
./images/bridges/bridges00196.png
./images/bridges/bridges00199.png
./images/bridges/bridges00202.png
`;
return data.split("\n")[index];
}

const frameCount = 67;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page5`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()




var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})






function canvas2(){
  const canvas = document.querySelector("#page7>canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
render();
});

function files(index) {
var data = `

./images/bookpages/1.webp?2
./images/bookpages/2.webp?2
./images/bookpages/3.webp?2
./images/bookpages/4.webp?2
./images/bookpages/5.webp?2
./images/bookpages/6.webp?2
./images/bookpages/7.webp?2
./images/bookpages/8.webp?2
./images/bookpages/9.webp?2
./images/bookpages/10.webp?2
./images/bookpages/11.webp?2
./images/bookpages/12.webp?2
./images/bookpages/13.webp?2
./images/bookpages/14.webp?2
./images/bookpages/15.webp?2
./images/bookpages/16.webp?2
./images/bookpages/17.webp?2
./images/bookpages/18.webp?2
./images/bookpages/19.webp?2
./images/bookpages/20.webp?2
./images/bookpages/21.webp?2
./images/bookpages/22.webp?2
./images/bookpages/23.webp?2
./images/bookpages/24.webp?2
./images/bookpages/25.webp?2
./images/bookpages/26.webp?2
./images/bookpages/27.webp?2
./images/bookpages/28.webp?2
./images/bookpages/29.webp?2
./images/bookpages/30.webp?2
./images/bookpages/31.webp?2
./images/bookpages/32.webp?2
./images/bookpages/33.webp?2
./images/bookpages/34.webp?2
./images/bookpages/35.webp?2
./images/bookpages/36.webp?2
./images/bookpages/37.webp?2
./images/bookpages/38.webp?2
./images/bookpages/39.webp?2
./images/bookpages/40.webp?2
./images/bookpages/41.webp?2
./images/bookpages/42.webp?2
./images/bookpages/43.webp?2
./images/bookpages/44.webp?2
./images/bookpages/45.webp?2
./images/bookpages/46.webp?2
./images/bookpages/47.webp?2
./images/bookpages/48.webp?2
./images/bookpages/49.webp?2
./images/bookpages/50.webp?2
./images/bookpages/51.webp?2
./images/bookpages/52.webp?2
./images/bookpages/53.webp?2
./images/bookpages/54.webp?2
./images/bookpages/55.webp?2
./images/bookpages/56.webp?2
./images/bookpages/57.webp?2
./images/bookpages/58.webp?2
./images/bookpages/59.webp?2
./images/bookpages/60.webp?2
./images/bookpages/61.webp?2
./images/bookpages/62.webp?2
./images/bookpages/63.webp?2
./images/bookpages/64.webp?2
./images/bookpages/65.webp?2
./images/bookpages/66.webp?2
./images/bookpages/67.webp?2
./images/bookpages/68.webp?2
./images/bookpages/69.webp?2
./images/bookpages/70.webp?2
./images/bookpages/71.webp?2
./images/bookpages/72.webp?2
./images/bookpages/73.webp?2
./images/bookpages/74.webp?2
./images/bookpages/75.webp?2
./images/bookpages/76.webp?2
./images/bookpages/77.webp?2
./images/bookpages/78.webp?2
./images/bookpages/79.webp?2
./images/bookpages/80.webp?2
./images/bookpages/81.webp?2
./images/bookpages/82.webp?2
./images/bookpages/83.webp?2
./images/bookpages/84.webp?2
./images/bookpages/85.webp?2
./images/bookpages/86.webp?2
./images/bookpages/87.webp?2
./images/bookpages/88.webp?2
./images/bookpages/89.webp?2
./images/bookpages/90.webp?2
./images/bookpages/91.webp?2
./images/bookpages/92.webp?2
./images/bookpages/93.webp?2
./images/bookpages/94.webp?2
./images/bookpages/95.webp?2
./images/bookpages/96.webp?2
./images/bookpages/97.webp?2
./images/bookpages/98.webp?2
./images/bookpages/99.webp?2
./images/bookpages/100.webp?2
./images/bookpages/101.webp?2
./images/bookpages/102.webp?2
./images/bookpages/103.webp?2
./images/bookpages/104.webp?2
./images/bookpages/105.webp?2
./images/bookpages/106.webp?2
./images/bookpages/107.webp?2
./images/bookpages/108.webp?2
./images/bookpages/109.webp?2
./images/bookpages/110.webp?2
./images/bookpages/111.webp?2
./images/bookpages/112.webp?2
./images/bookpages/113.webp?2
./images/bookpages/114.webp?2
./images/bookpages/115.webp?2
./images/bookpages/116.webp?2
./images/bookpages/117.webp?2
./images/bookpages/118.webp?2
./images/bookpages/119.webp?2
./images/bookpages/120.webp?2
./images/bookpages/121.webp?2
./images/bookpages/122.webp?2
./images/bookpages/123.webp?2
./images/bookpages/124.webp?2
./images/bookpages/125.webp?2
./images/bookpages/126.webp?2
./images/bookpages/127.webp?2
./images/bookpages/128.webp?2
./images/bookpages/129.webp?2
./images/bookpages/130.webp?2
./images/bookpages/131.webp?2
./images/bookpages/132.webp?2
./images/bookpages/133.webp?2
./images/bookpages/134.webp?2
./images/bookpages/135.webp?2
./images/bookpages/136.webp?2

`;
return data.split("\n")[index];
}

const frameCount = 136;

const images = [];
const imageSeq = {
frame: 1,
};

for (let i = 0; i < frameCount; i++) {
const img = new Image();
img.src = files(i);
images.push(img);
}

gsap.to(imageSeq, {
frame: frameCount - 1,
snap: "frame",
ease: `none`,
scrollTrigger: {
  scrub: .5,
  trigger: `#page7`,
  start: `top top`,
  end: `250% top`,
  scroller: `#main`,
},
onUpdate: render,
});

images[1].onload = render;

function render() {
scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
var canvas = ctx.canvas;
var hRatio = canvas.width / img.width;
var vRatio = canvas.height / img.height;
var ratio = Math.max(hRatio, vRatio);
var centerShift_x = (canvas.width - img.width * ratio) / 2;
var centerShift_y = (canvas.height - img.height * ratio) / 2;
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.drawImage(
  img,
  0,
  0,
  img.width,
  img.height,
  centerShift_x,
  centerShift_y,
  img.width * ratio,
  img.height * ratio
);
}
ScrollTrigger.create({

trigger: "#page7",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas2()



gsap.to(".page7-cir",{
  scrollTrigger:{
    trigger:`.page7-cir`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  scale:1.5
})



gsap.to(".page7-cir-inner",{
  scrollTrigger:{
    trigger:`.page7-cir-inner`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  backgroundColor : `#0a3bce91`,
})
// create illo
let illo = new Zdog.Illustration({
  // set canvas with selector
  element: ".zdog-canvas",
  resize: "fullscreen",
  centered: true,
  zoom: 4,
  dragRotate: true
});

//add origin
let origin = new Zdog.Anchor({
  addTo: illo,
  scale: 1
});

// circle
new Zdog.Ellipse({
  addTo: origin,
  diameter: 80,
  // position closer
  translate: { z: 40 },
  stroke: 20,
  color: "#636"
});

// square
new Zdog.Rect({
  addTo: origin,
  width: 80,
  height: 80,
  // position further back
  translate: { z: -40 },
  stroke: 12,
  color: "#E62",
  fill: true
});

//animate
function animate() {
  illo.zoom += 0.01;
  // rotate illo each frame
  illo.updateRenderGraph();
  // animate next frame
  requestAnimationFrame(animate);
}
// start animation
animate();
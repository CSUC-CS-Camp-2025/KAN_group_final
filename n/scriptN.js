let isThick = false;
let colorPicker, bgColorPicker;
let clearButton, thicknessButton, saveButton, undoButton, imgInput, galleryButton;
let uploadedImage = null;
let strokes = [];
let undoneStrokes = [];
let currentStroke = [];
let uploadedImages = [];

function setup() {
  const container = createDiv().id("container");
  container.parent("canvasContainer");

  const canvasContainer = createDiv().id("canvasWrap").parent(container);
  const c = createCanvas(840, 420);
  c.parent(canvasContainer);

  const toolbar = createDiv().id("toolbar").parent(container);

  colorPicker = createColorPicker("#000000").parent(toolbar);

  thicknessButton = createButton("Thick Stroke").parent(toolbar);
  thicknessButton.mousePressed(toggleThickness);

  clearButton = createButton("Clear").parent(toolbar);
  clearButton.mousePressed(clearCanvas);

  undoButton = createButton("Undo").parent(toolbar);
  undoButton.mousePressed(undoStroke);

  saveButton = createButton("Save").parent(toolbar);
  saveButton.mousePressed(saveDrawing);

  bgColorPicker = createColorPicker("#ffffff").parent(toolbar);

  imgInput = createFileInput(handleImageUpload);
  imgInput.elt.multiple = true;
  imgInput.parent(toolbar);

  galleryButton = createButton("Creator's Gallery").parent(toolbar);
  galleryButton.mousePressed(toggleGallery);

  createButton("🦆").parent(toolbar).mousePressed(() => {
    window.location.href = "indexN2.html";
  });

  createButton("🥚").parent(toolbar).mousePressed(() => {
    window.location.href = "indexN3.html";
  });

  setupGallerySidebar();
}

function draw() {
  background(bgColorPicker.color());

  if (uploadedImage) {
    image(uploadedImage, 0, 0, width, height);
  }

  for (let strokePath of strokes) {
    drawStroke(strokePath);
  }

  drawStroke(currentStroke);
}

function drawStroke(strokePath) {
  if (strokePath.length < 2) return;
  for (let i = 1; i < strokePath.length; i++) {
    let p1 = strokePath[i - 1];
    let p2 = strokePath[i];
    stroke(p2.color);
    strokeWeight(p2.weight);
    line(p1.x, p1.y, p2.x, p2.y);
  }
}

function mouseDragged() {
  if (mouseY <= height) {
    currentStroke.push({
      x: mouseX,
      y: mouseY,
      color: colorPicker.color(),
      weight: isThick ? 10 : 2,
    });
  }
}

function mouseReleased() {
  if (currentStroke.length > 0) {
    strokes.push(currentStroke);
    currentStroke = [];
    undoneStrokes = [];
  }
}

function toggleThickness() {
  isThick = !isThick;
  thicknessButton.html(isThick ? "Thin Stroke" : "Thick Stroke");
}

function clearCanvas() {
  strokes = [];
  undoneStrokes = [];
  uploadedImage = null;
}

function undoStroke() {
  if (strokes.length > 0) {
    undoneStrokes.push(strokes.pop());
  }
}

function saveDrawing() {
  saveCanvas("my-drawing", "png");
}

function handleImageUpload(file) {
  if (file.type === "image") {
    loadImage(file.data, (img) => {
      uploadedImage = img;
      strokes = [];
      undoneStrokes = [];
    });

    uploadedImages.push(file.data);
    updateGallery();
  } else {
    console.log("File is not an image.");
  }
}

function setupGallerySidebar() {
  const galleryContainer = document.createElement("div");
  galleryContainer.id = "galleryContainer";
  galleryContainer.innerHTML = `<h3>Example Drawings</h3><div id="gallery"></div>`;
  document.body.appendChild(galleryContainer);

  loadExampleGallery();
}

function toggleGallery() {
  const container = document.getElementById("galleryContainer");
  container.classList.toggle("open");
}

function loadExampleGallery() {
  const gallery = document.getElementById("gallery");
  const exampleImages = [
    "my-drawing (1).png",
    "my-drawing (2).png",
    "my-drawing.png",
    "nice.png"
  ];

  exampleImages.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.alt = "Example Drawing";
    gallery.appendChild(img);
  });
}

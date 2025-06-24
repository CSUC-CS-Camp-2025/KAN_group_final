let isThick = false;
let colorPicker, bgColorPicker;
let clearButton, thicknessButton, saveButton, undoButton, imgInput;
let uploadedImage = null;

let strokes = [];
let undoneStrokes = [];
let currentStroke = [];

function setup() {
  const container = createDiv().id("container");
  container.style("display", "flex");
  container.style("flexDirection", "column");
  container.style("alignItems", "center");
  container.style("gap", "10px");
  container.style("width", "850px");
  container.parent("canvasContainer");

  const canvasContainer = createDiv().id("canvasWrap").parent(container);
  const c = createCanvas(840, 420);
  c.parent(canvasContainer);

  const toolbar = createDiv().id("toolbar").parent(container);

  colorPicker = createColorPicker("#000000").parent(toolbar);

  thicknessButton = createButton("Thick Stroke");
  thicknessButton.mousePressed(toggleThickness).parent(toolbar);

  clearButton = createButton("Clear");
  clearButton.mousePressed(clearCanvas).parent(toolbar);

  undoButton = createButton("Undo");
  undoButton.mousePressed(undoStroke).parent(toolbar);

  saveButton = createButton("Save");
  saveButton.mousePressed(saveDrawing).parent(toolbar);

  bgColorPicker = createColorPicker("#ffffff").parent(toolbar);

  imgInput = createFileInput(handleImageUpload);
  imgInput.parent(toolbar);

  hiddenPageButton = createButton("🦆").parent(toolbar).mousePressed(() => {
    window.location.href = "indexN2.html";
  });

  normalButton = createButton("🦀").parent(toolbar).mousePressed(() => {
    window.location.href = "indexN1.html";
  });
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
  } else {
    console.log("File is not an image.");
  }
}

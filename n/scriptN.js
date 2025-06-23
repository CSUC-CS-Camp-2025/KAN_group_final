let prevX, prevY;
let isThick = false;
let strokeColor;
let clearButton, thicknessButton, colorPicker;

function setup() {
    createCanvas(800,500);
    background(240);
    smooth();

    //color picker
    colorPicker = createColorPicker("#000000");
    colorPicker.position(10, height + 75);
    createP("Pick A Color").position(10, height + 60);

    //thickness toggle
    thicknessButton = createButton("Toggle Thickness");
    thicknessButton.position(150, height + 75);
    thicknessButton.mousePressed(toggleThickness);

    //clear button
    clearButton = createButton("Clear Canvas");
    clearButton.position(450, height + 75);
    clearButton.mousePressed(clearCanvas);
}

function draw() {
    if (mouseIsPressed && mouseY <= height) {
        stroke(strokeColor || colorPicker.color());
        strokeWeight(isThick ? 10 : 2);
        line(prevX, prevY, mouseX, mouseY);
    }
    prevX = mouseX;
    prevY = mouseY;
}

function toggleThickness() {
    isThick = !isThick;
}

function clearCanvas() {
    background(240);
}
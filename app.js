
// Get the canvas element and its 2D context
const canvas = document.getElementById('drawingCanvas');
const ctx = canvas.getContext('2d');

// Initialize variables to track drawing state
let isDrawing = false; // Indicates if the user is currently drawing
let startX, startY; // Starting coordinates for drawing
let currentTool = 'line'; // Default drawing tool
let currentColor = '#000000'; // Default drawing color

// Task 2: Configure the JavaScript for Drawing Context
// Set up event listeners for mouse events
canvas.addEventListener('mousedown', startDrawing);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', stopDrawing);
canvas.addEventListener('mouseleave', stopDrawing);

// Event listener for tool selection
document.querySelectorAll('input[name="tool"]').forEach((tool) => {
    tool.addEventListener('change', (e) => {
        currentTool = e.target.value; // Update the current drawing tool
    });
});

// Event listener for color selection
const colorPicker = document.getElementById('colorPicker');
colorPicker.addEventListener('input', (e) => {
    currentColor = e.target.value; // Update the current drawing color
});

// Task 3: Implement Shape Drawing Logic
function startDrawing(e) {
    isDrawing = true; // Set drawing state to true
    startX = e.offsetX; // Capture the starting X coordinate
    startY = e.offsetY; // Capture the starting Y coordinate
}

function draw(e) {
    if (!isDrawing) return; // Exit if not drawing

    // Clear the canvas to redraw shapes
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Start a new path and set stroke color
    ctx.beginPath();
    ctx.strokeStyle = currentColor;

    const x = e.offsetX; // Current mouse position X
    const y = e.offsetY; // Current mouse position Y

    switch (currentTool) {
        case 'line':
            ctx.moveTo(startX, startY); // Move to starting position
            ctx.lineTo(x, y); // Draw a line to current position
            break;
        case 'rectangle':
            ctx.rect(startX, startY, x - startX, y - startY); // Draw a rectangle
            break;
        // Yeah my dumbass is lost om the circle
    }
    ctx.stroke(); // Render the shape
}



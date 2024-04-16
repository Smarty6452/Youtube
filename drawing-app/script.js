const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const sizeEL = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearEl = document.getElementById('clear');
const textBtn = document.getElementById('text'); // Changed variable name and button id to 'text'
const eraserBtn = document.getElementById('eraser');

const ctx = canvas.getContext('2d');

let size = 10;
let isPressed = false;
let isEraser = false;
let color = colorEl.value;
let x;
let y;

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
    if (textBtn.classList.contains('active')) { // If text tool is active
        const text = prompt('Enter your text:');
        if (text) {
            ctx.font = `${size * 2}px Arial`;
            ctx.fillStyle = color;
            ctx.fillText(text, x, y);
        }
        isPressed = false; // Deactivate text tool after using it once
    }
});

document.addEventListener('mouseup', (e) => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove', (e) => {
    if (isPressed && !textBtn.classList.contains('active')) { // Avoid drawing when text tool is active
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        if (isEraser) {
            ctx.clearRect(x2 - size / 2, y2 - size / 2, size, size);
        } else {
            drawLine(x, y, x2, y2);
            x = x2;
            y = y2;
        }
    }
});

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

function updateSizeOnScreen() {
    sizeEL.innerText = size;
}

increaseBtn.addEventListener('click', () => {
    size += 5;
    if (size > 50) {
        size = 50;
    }
    updateSizeOnScreen();
});

decreaseBtn.addEventListener('click', () => {
    size -= 5;
    if (size < 5) {
        size = 5;
    }
    updateSizeOnScreen();
});

colorEl.addEventListener('change', (e) => (color = e.target.value));

clearEl.addEventListener('click', () =>
    ctx.clearRect(0, 0, canvas.width, canvas.height)
);

textBtn.addEventListener('click', () => {
    isEraser = false;
    canvas.style.cursor = 'text';
    textBtn.classList.add('active');
    eraserBtn.classList.remove('active');
});

eraserBtn.addEventListener('click', () => {
    isEraser = true;
    canvas.style.cursor = 'url("https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Eraser_icon.svg/1024px-Eraser_icon.svg.png") 5 20, auto';
    textBtn.classList.remove('active');
});

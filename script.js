const widthInput = document.getElementById('width-input');
const heightInput = document.getElementById('height-input');
const colorInput = document.getElementById('color-input');
const displayWidth = document.getElementById('displayWidth');
const displayHeight = document.getElementById('displayHeight');
const displayColor = document.getElementById('displayColor');
const colorBox = document.getElementById('colorBox');

// Width Display in 3rd box
widthInput.addEventListener('input', () => {
    displayWidth.textContent = widthInput.value;
    colorBox.style.width = `${widthInput.value}px`;
});

// Height Display in 3rd box
heightInput.addEventListener('input', () => {
    displayHeight.textContent = heightInput.value;
    colorBox.style.width = `${heightInput.value}px`;
});

// Color Display in 3rd box
colorInput.addEventListener('input', () => {
    displayColor.textContent = colorInput.value;
    colorBox.style.backgroundColor = colorInput.value;
});
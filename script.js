let generateButton = document.querySelector('#generateButton')
let divPanel = document.querySelector('#interactivePanel')

generateButton.addEventListener('click', generateElement)
function generateElement() {
    divPanel.innerHTML = ''
    for (i = 0; i < 100; i++) {
        let div = document.createElement("div");
        div.classList.add("interactiveElement");
        let maxLeft = window.innerWidth - 50;
        let maxTop = window.innerHeight - 150;
        div.style.top = getRandomValue(maxTop) + "px";
        div.style.left = getRandomValue(maxLeft) + "px";
        div.style.backgroundColor = getRandomColor();
        divPanel.append(div)
    }
}

let move = false;
let offsetX, offsetY;
let currentDiv;

divPanel.addEventListener('mousedown', function (e) {
    if (e.target.localName = 'div' && e.target.classList.contains('interactiveElement'))
        move = true;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
    currentDiv = e.target
    console.log(currentDiv);
})

divPanel.addEventListener('mousemove', function (e) {
    if (move) {
        currentDiv.style.top = e.clientY - offsetY + 'px';
        currentDiv.style.left = e.clientX - offsetX + 'px'
    }
})

document.addEventListener('mouseup', function (e) {
    move = false;
})

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[getRandomValue(16)];
    }
    return color;
}

function getRandomValue(max) {
    return Math.floor(Math.random() * max);
}
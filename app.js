let rows = 16;
let cols = 16;

function randomColorValue(){
    return Math.floor(Math.random() * 256);
}

function updateColor(event){
    const div = event.target;
    
    let r = randomColorValue();
    let g = randomColorValue();
    let b = randomColorValue();
    // extract alpha from css rgba function
    // rgba(0-255, 0-255, 0-255, 0.0-1.0) when a is 0 it is in a form of 0 without dot
    // after splitting take last value, which will be for example " 0.3)"
    // split again and filter, which results in ['0', '.', '3']
    // join and change to number with (+) unary operator
    let a = +div.style.backgroundColor.split(",").at(-1).split("").filter(c => (c >= '0' && c <= '9') || c === '.').join("");
    if(a < 1){
        a += 0.1;
    }
    div.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a})`;
}

function showSizeChangePrompt(){
    let size = prompt("What grid size would you like?");
    while(!(size && Number.isInteger(+size) &&
     +size > 0 && +size < 100)){
        size = prompt("You need to provide a positive Integer smaller than 100, try again");
    };
    updateGridSize(+size);
}

function createGridUnit(){
    const gridUnit = document.createElement("div");
    gridUnit.style.boxSizing = "border-box";
    gridUnit.style.minHeight = `${640/rows}px`;
    gridUnit.style.minWidth = `${640/cols}px`;
    gridUnit.style.border = "1px solid black";
    gridUnit.style.backgroundColor = `rgba(0, 0, 0, 0.0)`
    gridUnit.addEventListener("mouseover", event => updateColor(event));
    return gridUnit;
}

function createGridChildren(){
    for(let i = 0; i < rows*cols; i++){
        gridDiv.appendChild(createGridUnit());
    }
}

function updateGridSize(size){
    rows = size;
    cols = size;
    gridDiv.textContent = '';
    createGridChildren();
}

const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.padding = "20px 0";
body.style.gap = "20px";
body.style.backgroundColor = "gray";


const changeSizeButton = document.createElement("button");
changeSizeButton.textContent = "Do you want to change size?";
changeSizeButton.addEventListener("click", showSizeChangePrompt);
body.appendChild(changeSizeButton);


const gridDiv = document.createElement("div");
gridDiv.style.width = "640px";
gridDiv.style.height = "640px";
gridDiv.style.border = "1px solid black";
gridDiv.style.display = "flex";
gridDiv.style.flex = "0 0 auto";
gridDiv.style.alignItems = "center";
gridDiv.style.flexWrap = "wrap";
gridDiv.style.backgroundColor = "white";

createGridChildren();

body.appendChild(gridDiv);
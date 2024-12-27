let rows = 16;
let cols = 16;

function updateColor(event){
    const div = event.target;
    div.style.backgroundColor = "red";
}

function showSizeChangePrompt(){
    let size = prompt("What grid size would you like?");
    while(!(size && Number.isInteger(+size) && +size > 0)){
        size = prompt("You need to provide a positive Integer, try again");
    };
    updateGridSize(+size);
}

function createGridUnit(){
    const gridUnit = document.createElement("div");
    gridUnit.style.boxSizing = "border-box";
    gridUnit.style.minHeight = `${640/rows}px`;
    gridUnit.style.minWidth = `${640/cols}px`;
    gridUnit.style.border = "1px solid black";
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

createGridChildren();



body.appendChild(gridDiv);
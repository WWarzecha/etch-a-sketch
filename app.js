const ROWS = 16;
const COLS = 16;

function createGridUnit(){
    const gridUnit = document.createElement("div");
    gridUnit.style.boxSizing = "border-box";
    gridUnit.style.minHeight = `${640/ROWS}px`;
    gridUnit.style.minWidth = `${640/COLS}px`;
    gridUnit.style.border = "1px solid black";
    return gridUnit;
}

const body = document.querySelector("body");
body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.padding = "20px 0";


const gridDiv = document.createElement("div");

gridDiv.style.width = "640px";
gridDiv.style.height = "640px";
gridDiv.style.border = "1px solid black";
gridDiv.style.display = "flex";
gridDiv.style.flex = "0 0 auto";
gridDiv.style.alignItems = "center";
gridDiv.style.flexWrap = "wrap";


for(let i = 0; i < ROWS*COLS; i++){
    gridDiv.appendChild(createGridUnit());
}


body.appendChild(gridDiv);
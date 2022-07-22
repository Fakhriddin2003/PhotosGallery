
const colorsBox = document.getElementById("colorsBox")
const colorText = document.getElementById("color-text")
let index = 2;
let lastColors = ""
const testElement = document.createElement("div")
colorsBox.innerHTML = "";
const checkColor = (color) => {
    const colors = document.getElementsByClassName("color-box");

    // Background berish jarayoni
    if(color.includes(".")) testElement.style.background = `url(${color})`;
   else testElement.style.background = color;

    for (const element of colors) {
        if (element.style.background == testElement.style.background) return true;
    }
    return false;
}
const addColor = () => {
    const color = colorText.value;
    if (color == "" || checkColor(color)) return;
    lastColors = colorsBox.innerHTML;
    const col = document.createElement("div");
    col.className = "col-sm-6 col-md-4 col-lg-3 mb-3";
    col.id = index;
    const colorBox = document.createElement("div");
    colorBox.className = "rounded shadow color-box";

    // Background berish jarayoni
    if(color.includes(".")) colorBox.style.background = `url(${color})`;
   else colorBox.style.background = color;

    colorBox.innerHTML = `
<button class="btn btn-danger" onclick="deleteColor('${index++}')"> 
<i class="fas fa-trash"></i></button>
`;
    col.appendChild(colorBox);
    colorsBox.appendChild(col)
}
const deleteColor = (id) => {
    const element = document.getElementById(id)
    console.log(element);
    element.remove()
};
const removeAllColors = () => {
    lastColors = colorsBox.innerHTML;
    colorsBox.innerHTML = ""
}
const back = () => {
    colorsBox.innerHTML = lastColors
}
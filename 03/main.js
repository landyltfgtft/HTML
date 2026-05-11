var ancho = document.getElementById("ancho");
var alto = document.getElementById("alto");
var color = document.getElementById("color");
var radius = document.getElementById("radius");
var anchoborde = document.getElementById("anchoborde");
var colorborde = document.getElementById("colorborde");
var tipoborde = document.getElementById("tipoborde");
var figura = document.getElementById("figura");

ancho.oninput = () => {
    document.getElementById("vancho").textContent = ancho.value;
    figura.style.width = ancho.value + "px";
}

alto.oninput = () => {
    document.getElementById("valto").textContent = alto.value;
    figura.style.height = alto.value + "px";
}

color.oninput = () => {
    figura.style.background = color.value;
}

radius.oninput = () => {
    figura.style.borderRadius = radius.value + "%";
    document.getElementById("vradio").innerHTML = radius.value;
}

anchoborde.oninput = () => {
    figura.style.borderWidth = anchoborde.value + "px";
    document.getElementById("vanchoborde").innerHTML = anchoborde.value;
}

colorborde.oninput = () => {
    figura.style.borderColor = colorborde.value;
}

tipoborde.onchange = () => {
    figura.style.borderStyle = tipoborde.value;
}

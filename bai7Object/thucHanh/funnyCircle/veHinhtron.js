function getRandomHex() {
    return Math.floor(Math.random() * 255);
}

function getRandomColor() {
    let red = getRandomHex();
    let green = getRandomHex();
    let blue = getRandomHex();
    return "rgb(" + red + "," + blue + "," + green + ")";
}


let toadox = document.getElementById("toadox");
let toadoy = document.getElementById("toadoy");
let radius = document.getElementById("radius");

function creatCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let color = getRandomColor();
    let tron = new circle();
    tron.setToadox(toadox.value * 1);
    tron.setToadoy(toadoy.value * 1);
    tron.setRadius(radius.value * 1);

    ctx.beginPath();
    ctx.arc(tron.getToadox(toadox.value * 1), tron.getToadoy(toadoy.value * 1),
        tron.getRadius(radius.value * 1), 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill()
}

function addRandomCircle() {
    let ctx = document.getElementById("myCanvas").getContext("2d");
    let color = getRandomColor();
    let tron = new circle();
    tron.setToadox(toadox.value * 1 + Math.random() * window.innerWidth);
    tron.setToadoy(toadoy.value * 1 + Math.random() * window.innerHeight);
    tron.setRadius(radius.value * 1);
    ctx.beginPath();
    ctx.arc(tron.getToadox(toadox.value * 1 + Math.random() * window.innerWidth),
        tron.getToadoy(toadoy.value * 1 + Math.random() * window.innerHeight),
        tron.getRadius(radius.value * 1), 0, 2 * Math.PI);
    ctx.fillStyle = color;
    ctx.fill()
}
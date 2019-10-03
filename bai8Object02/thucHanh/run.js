let battery = new Battery();
battery.setEnergy(10);
let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);
document.getElementById("result").innerHTML = ("Battery info: " + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.Light();

function onflash() {
    flashLamp.turnOn();
    flashLamp.Light();
    battery.decreaaseEnerrgy();
    document.getElementById("result").innerHTML = ("Battery info: " + flashLamp.getBatteryInfo() + "<br/>");
}

function offflash() {
    document.getElementById("result").innerHTML = ("Battery info: " + flashLamp.getBatteryInfo() + "<br/>");
    flashLamp.turnOff();
    flashLamp.Light();
}
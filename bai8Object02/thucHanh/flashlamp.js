let FlashLamp = function () {
    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    };
    this.Light = function () {
        if (this.status) {
            alert("Lightning");
        } else alert("Not lightning");
    };
    this.turnOn = function () {
        this.status = true;
    };
    this.turnOff = function () {
        this.status = false;
    };
};
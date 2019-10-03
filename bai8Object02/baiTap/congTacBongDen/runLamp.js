let button = new Switchbutton();
let lamp = new Electriclamp();

function run() {
    for (let i = 0; i < 5; i++) {
        button.On();
        lamp.Sang();
        button.Off();
        lamp.Toi();
    }
}
run();
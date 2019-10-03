let Battery = function () {
    this.setEnergy = function (energy) {
        this.energy = energy;
    };
    this.getEnergy = function () {
        return this.energy;
    };
    this.decreaaseEnerrgy = function () {
        if (this.energy > 0) {
            this.energy--;
        }
    };
};
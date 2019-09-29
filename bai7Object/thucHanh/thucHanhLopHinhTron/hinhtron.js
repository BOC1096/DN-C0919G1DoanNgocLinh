let Circle = function () {
    this.setRadius = function (radius) {
        this.radius = radius;
    };
    this.getRadius = function (radius) {
        return this.radius;
    };
    this.area = function () {
        return this.radius * this.radius * 3.14;
    };
};
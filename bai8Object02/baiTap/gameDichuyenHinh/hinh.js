function Hero(image, top, left, size, speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed = speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; ' +
            'left:' + this.left + 'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += this.speed;
        console.log('ok: ' + this.left);
    };
    this.moveLeft = function () {
        this.left = this.left - this.speed;

    };
    this.moveDown = function () {
        this.top = this.top + this.speed;
    };
    this.moveUp = function () {
        this.top = this.top - this.speed;
    }

}

var hero = new Hero('luffy.jpg', 20, 30, 200, 30);

function right() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveRight();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

function left() {
    if (hero.left < window.innerWidth - hero.size) {
        hero.moveLeft();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

function down() {
    if (hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

function up() {
    if (hero.top < window.innerHeight - hero.size) {
        hero.moveUp();
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
}

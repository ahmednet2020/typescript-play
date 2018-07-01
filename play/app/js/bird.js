"use strict";
var bird = (function () {
    function bird() {
        this.y = height / 2;
        this.x = 100;
        this.velocity = 0;
        this.lift = -10;
        this.gravity = 0.5;
    }
    bird.prototype.show = function () {
        fill("#fff");
        noStroke();
        ellipse(this.x, this.y, 20, 20);
    };
    bird.prototype.up = function () {
        this.velocity += this.lift;
    };
    bird.prototype.down = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;
    };
    bird.prototype.screenoff = function () {
        if (this.y > height) {
            this.y = height;
            this.velocity = 0;
        }
        else if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    };
    return bird;
}());
//# sourceMappingURL=bird.js.map
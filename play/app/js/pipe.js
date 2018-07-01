"use strict";
var pipe = (function () {
    function pipe() {
        this.bottom = random(50, height);
        this.x = width;
        this.width = 20;
        this.color = "#fff";
        this.speed = 5;
        this.rect = Math.round(random(0, 4));
        this.position = "";
    }
    pipe.prototype.show = function () {
        fill(this.color);
        noStroke();
        switch (this.rect) {
            case 0:
            case 1:
                rect(this.x, height - this.bottom, this.width, this.bottom);
                this.position = "bottom";
                break;
            case 2:
            case 3:
            case 4:
                rect(this.x, 0, this.width, this.bottom);
                this.position = "top";
                break;
        }
    };
    pipe.prototype.left = function () {
        this.x -= this.speed;
    };
    pipe.prototype.check = function (bird) {
        var check;
        var status = false;
        switch (this.position) {
            case "top":
                check = bird.y < this.bottom;
                break;
            case "bottom":
                check = bird.y > (height - this.bottom);
                break;
        }
        if (bird.x > this.x && bird.x < (this.x + this.width)) {
            if (check) {
                status = true;
            }
        }
        else {
            status = false;
        }
        return status;
    };
    pipe.prototype.remove = function () {
        if (this.x < 0) {
            return true;
        }
        else {
            return false;
        }
    };
    return pipe;
}());
//# sourceMappingURL=pipe.js.map
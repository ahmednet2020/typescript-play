"use strict";
var fly;
var wall = [];
function setup() {
    createCanvas(windowWidth, 500);
    background("#000");
    fly = new bird();
    wall.push(new pipe());
    setInterval(function () {
        wall.push(new pipe());
    }, 2000);
}
function draw() {
    background("#000");
    fly.show();
    fly.down();
    fly.screenoff();
    for (var i in wall) {
        if (wall[i].remove()) {
            wall.splice(i, 1);
        }
        if (wall[i].check(fly)) {
            wall[i].color = "#f00";
            wall[i].show();
            noLoop();
        }
        wall[i].left();
        wall[i].show();
    }
}
function keyPressed() {
    if (key == ' ') {
        fly.up();
    }
}
//# sourceMappingURL=play.js.map
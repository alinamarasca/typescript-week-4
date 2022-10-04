"use strict";
var paperSize;
(function (paperSize) {
    paperSize["A4"] = "A4";
    paperSize["A5"] = "A5";
    paperSize["A6"] = "A6";
    paperSize["A7"] = "A7";
})(paperSize || (paperSize = {}));
var tvType;
(function (tvType) {
    tvType["LCD"] = "LCD";
    tvType["OLED"] = "OLED";
})(tvType || (tvType = {}));
//
class Pencil {
}
class Paper {
}
class Tv {
}
class Speaker {
}
class Box {
    constructor() {
        this.content = [];
    }
    //add
    add(item) {
        this.content.push(item);
    }
    // empty
    empty() {
        this.content = [];
    }
    //remove
    remove() {
        this.content.pop();
    }
}
const myPaper = new Paper();
myPaper.grams = 10;
myPaper.size = paperSize.A4;
const myTv = new Tv();
myTv.grams = 1000;
myTv.type = tvType.LCD;
const putItem = (item) => {
    // console.log("type", item instanceof Tv);
    if (item instanceof Paper || item instanceof Pencil) {
        const smallBox = new Box();
        smallBox.add(item);
        console.log("paper", "SmallBox", smallBox.content);
        // console.log(item instanceof Paper || Pencil);
    }
    if (item instanceof Tv || item instanceof Speaker) {
        const bigBox = new Box();
        bigBox.add(item);
        console.log("tv", "bigBox", bigBox.content);
    }
};
// f(myPaper);
putItem(myTv);
//define weight
// small obj - extend paper and pencil
//big obj - extend tv or speaker
// smallBox only small obj
// bigBox only small obj

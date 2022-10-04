"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
// const myPaper = new Paper();
// myPaper.grams = 10;
// myPaper.size = paperSize.A4;
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
const answers = { box: "", action: "", item: "" };
readline.question(
//select box
"With which box do you want to interact? (1) Small Box, (2) Big Box ", (box) => {
    if (`${box}` == "1") {
        console.log(`Small Box`);
        answers.box = box;
    }
    if (`${box}` == "2") {
        console.log(`Big Box`);
        answers.box = box;
    }
    answers.box = box;
    // end box
    // select action
    readline.question("What do you want to do? (1) add item (2) delete item (3) empty the box", (action) => {
        if (`${action}` == "1") {
            console.log(`add`);
        }
        if (`${action}` == "2") {
            console.log(`delete`);
        }
        if (`${action}` == "3") {
            console.log(`empty`);
        }
        answers.action = action;
    });
    // end action
    // select item
    // small;
    if (answers.box == "1") {
        readline.question("What do you want to add? (1) paper (2) pencil", (item) => {
            if (`${item}` == "1") {
                answers.item = "paper";
            }
            if (`${item}` == "2") {
                answers.item = "pencil";
            }
        });
    }
    // big
    if (answers.box == "2") {
        readline.question("What do you want to add? (1) tv (2) speaker (3)", (item) => {
            if (`${item}` == "1") {
                answers.item = "tv";
            }
            if (`${item}` == "2") {
                answers.item = "pencil";
            }
        });
    }
    // end item
});
// const putItem = (item: any) => {
//   // console.log("type", item instanceof Tv);
//   if (item instanceof Paper || item instanceof Pencil) {
//     const smallBox = new Box();
//     smallBox.add(item);
//     console.log("paper", "SmallBox", smallBox.content);
//     // console.log(item instanceof Paper || Pencil);
//   }
//   if (item instanceof Tv || item instanceof Speaker) {
//     const bigBox = new Box();
//     bigBox.add(item);
//     console.log("tv", "bigBox", bigBox.content);
//   }
// };

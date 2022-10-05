"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
        if (this.content.length !== 0) {
            this.content = [];
        }
        else {
            console.log("This box is already empty!");
        }
    }
    //remove
    remove() {
        if (this.content.length !== 0) {
            this.content.pop();
        }
        else {
            console.log(`The ${this.size} box is empty!`);
        }
    }
}
function interact(uInput) {
    //create box
    let box = new Box();
    if (uInput.selectedBox == 1) {
        box.size = "small";
    }
    if (uInput.selectedBox == 2) {
        box.size = "big";
    }
    //add
    if (uInput.selectedAction == 1) {
        box.add(uInput.selectedItem);
        console.log("added to the box:", box.content);
    }
    //delete
    if (uInput.selectedAction == 2) {
        box.remove();
    }
    //empty
    if (uInput.selectedAction == 3) {
        box.empty();
    }
    console.log(box.size, uInput.selectedItem);
}
const rli = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});
function input(prompt) {
    return new Promise((callbackFn, errorFn) => {
        rli.question(prompt, (input) => {
            callbackFn(input);
        }, () => {
            errorFn();
        });
    });
}
let uInput = {
    selectedBox: 0,
    selectedAction: 0,
    selectedItem: 0
};
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    //box
    uInput.selectedBox = yield input("With which box do you want to interact? (1) Small Box, (2) Big Box");
    // action
    uInput.selectedAction = yield input("What do you want to do? (1) add item (2) delete item (3) empty the box");
    // add item
    if (uInput.selectedBox == 1 && uInput.selectedAction == 1) {
        let item = yield input("What do you want to add? (1) paper (2) pencil");
        if (item == 1) {
            let i = new Paper();
            let s = yield input("What is paper size: (1)A4, (2)A5, (3)A6, (4)A7?");
            //how to address enum??
            s == 1
                ? (i.size = paperSize.A4)
                : s == 2
                    ? (i.size = paperSize.A5)
                    : s == 3
                        ? (i.size = paperSize.A6)
                        : s == 4
                            ? (i.size = paperSize.A7)
                            : null;
            console.log("S", s);
            // i.size = s;
            i.grams = Number(yield input("Weight?"));
            uInput.selectedItem = i;
        }
        else {
            uInput.selectedItem = "pencil";
            let i = new Pencil();
            i.grams = Number(yield input("Weight?"));
            uInput.selectedItem = i;
        }
    }
    if (uInput.selectedBox == 2 && uInput.selectedAction == 1) {
        let item = yield input("What do you want to add? (1) tv (2) speakers");
        if (item == 1) {
            uInput.selectedItem = "tv";
            let i = new Tv();
            let t = yield input("What is Tv type: LCD or OLED?");
            //how to address enum??
            i.type = tvType.LCD;
            i.grams = Number(yield input("Weight?"));
            uInput.selectedItem = i;
        }
        else {
            uInput.selectedItem = "speakers";
            let i = new Speaker();
            i.grams = Number(yield input("Weight?"));
            uInput.selectedItem = i;
        }
    }
    interact(uInput);
    rli.close();
});
main();
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

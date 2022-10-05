enum paperSize {
  A4 = "A4",
  A5 = "A5",
  A6 = "A6",
  A7 = "A7"
}
enum tvType {
  LCD = "LCD",
  OLED = "OLED"
}

interface weight {
  grams: number;
}
interface capacity {
  watt: number;
}
//
class Pencil implements weight {
  grams!: number;
}

class Paper implements weight {
  grams!: number;
  size!: paperSize;
}
class Tv implements weight {
  grams!: number;
  type!: tvType;
}
class Speaker implements weight {
  grams!: number;
  capacity!: number;
}

type smallObj = Paper | Pencil;
type bigObj = Tv | Speaker;

class Box {
  content: object[] = [];
  size!: "small" | "big";

  //add
  add(item: any) {
    this.content.push(item);
  }
  // empty
  empty() {
    if (this.content.length !== 0) {
      this.content = [];
    } else {
      console.log("This box is already empty!");
    }
  }
  //remove
  remove() {
    if (this.content.length !== 0) {
      this.content.pop();
    } else {
      console.log(`The ${this.size} box is empty!`);
    }
  }
}

function interact(uInput: Input) {
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

function input(prompt: any) {
  return new Promise((callbackFn, errorFn) => {
    rli.question(
      prompt,
      (input: any) => {
        callbackFn(input);
      },
      () => {
        errorFn();
      }
    );
  });
}
interface Input {
  selectedBox: unknown;
  selectedAction: unknown;
  selectedItem: unknown;
}

let uInput: Input = {
  selectedBox: 0,
  selectedAction: 0,
  selectedItem: 0
};

const main = async () => {
  //box
  uInput.selectedBox = await input(
    "With which box do you want to interact? (1) Small Box, (2) Big Box"
  );

  // action
  uInput.selectedAction = await input(
    "What do you want to do? (1) add item (2) delete item (3) empty the box"
  );

  // add item
  if (uInput.selectedBox == 1 && uInput.selectedAction == 1) {
    let item = await input("What do you want to add? (1) paper (2) pencil");
    if (item == 1) {
      let i = new Paper();
      let s = await input("What is paper size: A4, A5, A6, A7?");
      //how to address enum??
      i.size = paperSize.A4;
      i.grams = Number(await input("Weight?"));
      uInput.selectedItem = i;
    } else {
      uInput.selectedItem = "pencil";
      let i = new Pencil();
      i.grams = Number(await input("Weight?"));
      uInput.selectedItem = i;
    }
  }
  if (uInput.selectedBox == 2 && uInput.selectedAction == 1) {
    let item = await input("What do you want to add? (1) tv (2) speakers");
    if (item == 1) {
      uInput.selectedItem = "tv";
      let i = new Tv();
      let t = await input("What is Tv type: LCD or OLED?");
      //how to address enum??
      i.type = tvType.LCD;
      i.grams = Number(await input("Weight?"));
      uInput.selectedItem = i;
    } else {
      uInput.selectedItem = "speakers";
      let i = new Speaker();
      i.grams = Number(await input("Weight?"));
      uInput.selectedItem = i;
    }
  }

  interact(uInput);

  rli.close();
};

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

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
// let myPaper: Paper = {
//   item: "paper",
//   grams: 10
// };
// how do you know big or small
// check if paper or pencil- small => can add to small box
//if type tv or spekaer => put in big box
// interface speaker {}
type smallObj = Paper | Pencil;
type bigObj = Tv | Speaker;

class Box {
  content: object[] = [];
  size!: "small-box" | "big-box";

  //add
  add(item: any) {
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

const putItem = (item: any) => {
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

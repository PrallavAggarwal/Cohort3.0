//classes

class rectangle{
  constructor(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area(){
    const area = this.width * this.height;
    console.log(this);
    return area;
  }

  paint(){
    console.log(`rectangle painted with ${this.color} color.`);
  }
}

const rect = new rectangle(3,4,'red');
const area = rect.area();
console.log(area);
console.log(rect.paint());
const rect2 = new rectangle(5,6, 'blue');
console.log(`rect2 object of rectangle class: \n${rect2}`);
console.log(rect2.area());
console.log(rect2.paint());




// pattern module
import deepClone from 'utils';

class Person {
  constructor({ height, weight, skin, contacts }) {
    this.height = height;
    this.weight = weight;
    this.skin = skin;
    contacts = contacts;
  }

  // must implement clone method (often supports deep copying)
  clone(deep = false) {
    if (!deep) {
      return { ...this };
    } else {
      return deepClone(this);
    }
  }
}


// client module
const person = new Person({ height: 200, weight: 85, skin: 'black', contacts: [
  {
    phone: '7999999999',
    name: 'John Smith',
  },
  {
    phone: '71111111111',
    name: 'Alex Fill',
  }
]})

const cloned = person.clone();
const cloned2 = person.clone(true);





// Example:
// pattern module
const canvas = document.createElement('canvas');
const context = canvas.getContext('2d');

class Rect {
  constructor(width, height, fillstyle, context) {
    this.width = width;
    this.height = height;
    this.fillstyle = fillstyle;
    this.context = context;
  }

  render(x, y) {
    this.context.fillstyle = this.fillstyle;
    this.context.fillRect(x, y, this.width, this.height);
  }

  clone() {
    const proto = Object.getPrototypeOf(this);
    const cloned = Object.create(proto);

    cloned.width = this.width;
    cloned.height = this.height;
    cloned.fillstyle = this.fillstyle;
    cloned.context = this.context;

    return cloned;
  }
}


// client module
const rect = new Rect(100, 100, 'rgba(0,0,0', context);

canvas.addEventListener('click', event => {
  const { clientX: x, clientY: y } = event;
  rect.clone().render(x, y);
});

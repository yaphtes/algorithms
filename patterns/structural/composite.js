// Composite (компоновщик)
// Компоновщик является структурным паттерном, который позволяет работать с объектами
// древовидной структуры как с одним целым, предоставляя универсальный интерфейс и
// избавляя клиентский код от необходимости обращаться непосредственно к каждому элементу дерева.

// Для использования паттерна "Компоновщик" нужна древовидная структура данных и общий интерфейс,
// который реализовывают листья и узлы дерева. Листья должны реализовать методы интерфейса
// а узлы должны итерировать свои дочерние элементы и применять к ним запрошенный метод.
// Таким образом, паттерн "Компоновщик" позволяет рекурсивно применить необходимый метод ко всему дереву.


// pattern module
class Component { // интерфейс узлов и листьев
  constructor() {
    this.value = '';
    this.children = [];
  }

  getResult() { // метод, который должен поддерживать и узлы и листься
    throw new Error('getResult mthod must be defined');
  }
}

class Node extends Component { // узлы
  constructor(value, ...children) {
    super();
    this.value = value;
    this.children = children;
  }

  add(node) {
    this.children.push(node);
    return this;
  }

  getResult() {
    return {
      value: this.value,
      children: this.children,
    };
  }
}

class Leaf extends Component { // листья
  constructor(value) {
    super();
    this.value = value;
  }

  getResult() {
    return { value: this.value };
  }
}


// client module
const mainNode = new Node('root');
mainNode
  .add(new Leaf('leaf level 1'))
  .add(new Leaf('leaf level 1'));

const subNodeOne = new Node('subnode 1');
subNodeOne
  .add(new Leaf('leaf level 2'))
  .add(new Leaf('leaf level 2'))
  .add(new Leaf('leaf level 2'));

const subNodeTwo = new Node('subnode 2');
subNodeOne
  .add(new Leaf('leaf level 2'))
  .add(new Leaf('leaf level 2'))
  .add(new Leaf('leaf level 2'));

mainNode
  .add(subNodeOne)
  .add(subNodeOne);


// обращаемся к узлам и листьям едиными интерфейсом
// new Leaf(...).getResult();
// new Node(...).getResult();

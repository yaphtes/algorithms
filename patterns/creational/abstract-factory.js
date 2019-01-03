// pattern module
class DrinkAbstractFactory {
  static createFactory(type) {
    if (!type) {
      throw Error('type should not be empty');
    }

    const Factory = AbstractFactory.factories[type];
    if (typeof factory != 'function') {
      throw new Error('can`t find factory');
    }

    return Factory;
  }

  static factories = {
    CoffeeFactory,
    TeaFactory,
  };
}

class CoffeeFactory { // concrete factory module
  static create(type, params) {
    if (!type) {
      throw new Error('type should not be empty');
    }

    const Constructor = constructors[type];
    if (typeof Constructor != 'function') {
      throw new Error('can`t find constructor');
    }

    return new Constructor(params);
  }
  
  static constructors = {
    Espresso,
    Americano,
  };
}

class TeaFactory { // concrete factory module
  static create(type, params) {
    if (!type) {
      throw new Error('type should not be empty');
    }

    const Constructor = TeaFactory.constructors[type];
    if (typeof Constructor != 'function') {
      throw new Error('can`t find constructor');
    }

    return new Constructor(params);
  }

  static constructors = {
    Red,
    Green,
    Black,
  };
}


// client module
const CoffeeFactory = DrinkFactory.createFactory('CoffeeFactory');
const americano = CoffeeFactory.create('Americano', { amound: 2, sugar: true });
const espresso = CoffeeFactory.create('Espresso', { amound: 3, sugar: false });

const TeaFactory = DrinkFactory.createFactory('TeaFactory');
const redTea = TeaFactory.create('Red', { sugar: true });
const greenTea = TeaFactory.create('Green', { sugar: false });
const blackTeam = TeaFactory.create('Black', { amound: 3, sugar: true });
// module
class CoffeeFactory {
  static create(type, params) {
    if (!type) throw new Error('type should not be empty');
    
    const Constructor = CoffeeFactory.constructors[type];
    if (typeof constructor != 'function') {
      throw new Error('can`t find constructor')
    }

    return new Constructor(params);
  }

  static constructors = {
    Americano,
    Espresso
  }
}


// client
const americano = CoffeeFactory.create('Americano', { amound: 2, sugar: false });
const expresso = CoffeeFactory.create('Espresso', { amound: 3, sugar: true });
// Factory (фабрика)
// Избавляет клиент от привязки к конкретным классам
// Позволяет сгруппировать похожие "категории" классов в одной фабрике (единое место создания объектов)
// Упрощает добавление новых классов в проект (зависимость добавляется только в фабрику, а не в клиентские модули)
// Не нужно использовать с небольшим количеством классов


// pattern module
class CoffeeFactory {
  static create(type, params) {
    if (!type) throw new Error('Type should not be empty');
    
    const Constructor = CoffeeFactory.constructors[type];
    if (typeof constructor != 'function') throw new Error(`Invalid type: ${type}`);

    return new Constructor(params);
  }

  static constructors = {
    Americano,
    Espresso,
  }
}


// client module
const americano = CoffeeFactory.create('Americano', { foo: 'bar' });
const expresso = CoffeeFactory.create('Espresso', { foo: 'bar' });
// Abstract factory (абстрактная фабрика)
// Выполняет все те же функции, что и обычная фабрика, но..
// ..помимо эттого добавляет дополнительный уровень абсттракции, например,
// 
// обычная фабрика:
// Factory -> Porshe, Ferrary
// 
// абстракттная фабрика:
// AbstractFactory -> AircraftsFactory, CarsFactory
//    AircraftsFactory -> Boeing, Airbus
//    CarsFactory -> Porshe, Ferrary


// pattern module
class TransportAbstractFactory {
  static createFactory(type) {
    if (!type) throw Error('Type should not be empty');

    const Factory = AbstractFactory.factories[type];
    if (typeof factory != 'function') throw new Error(`Innvalid type: ${type}`);

    return Factory;
  }

  static factories = {
    CarsFactory,
    AircraftsFactory,
  };
}

class AircraftsFactory { // concrete factory module
  static create(type, params) {
    if (!type) throw new Error('Type should not be empty');

    const Constructor = AircraftsFactory.constructors[type];
    if (typeof Constructor != 'function') throw new Error(`Innvalid type: ${type}`);

    return new Constructor(params);
  }
  
  static constructors = {
    Boeing,
    Airbus,
  };
}

class CarsFactory { // concrete factory module
  static create(type, params) {
    if (!type) throw new Error('Type should not be empty');

    const Constructor = CarsFactory.constructors[type];
    if (typeof Constructor != 'function') throw new Error(`Innvalid type: ${type}`);

    return new Constructor(params);
  }

  static constructors = {
    Porshe,
    Ferrary,
  };
}


// client module
const AircraftsFactory = TransportAbstractFactory.createFactory('AircraftsFactory');
const boeing = AircraftsFactory.create('Boeing', { foo: 'bar' });
const airbus = AircraftsFactory.create('Airbus', { foo: 'bar' });

const CarsFactory = TransportAbstractFactory.createFactory('CarsFactory');
const porshe = CarsFactory.create('Porshe', { foor: 'bar' });
const ferrary = CarsFactory.create('Ferrary', { foo: 'bar' });

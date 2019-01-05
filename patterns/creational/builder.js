// Builder (строитель)
// Избавляет клиент от привязки к конкретным класса.
// Даёт более тонкий контроль над процессом создания объектов.
// Удобно делать отложенный или условный билдинг.
// Есть возможность использования дополнительного уровня абстракции Director (от слова перенаправлять), 
// который даёт некие предустановленные сборки из билдера.


// pattern module
class Computer {
  constructor(builder) {
    for (const key in builder) {
      const value = builder[key];
      this[key] = value;
    }
  }
}

class ComputerBuilder {
  setProcessor(processor) {
    this.processor = processor;

    return this;
  }

  setMemory(memory) {
    this.memory = memory;

    return this;
  }

  setMotherboard(motherboard) {
    this.motherboard = motherboard;

    return this;
  }

  build() {
    return new Computer(this);
  }
}

class ComputerBuilderDirector { // optional director (gives an additional level of abstraction)
  constructor(builder) {
    this.builder = builder;
  }

  createExpensiveComputer() {
    return this.builder
      .setMotherboard('MS4200')
      .setProcessor('core i9 7790k')
      .setMemory('16384')
      .build();
  }

  createCheapComputer() {
    return this.builder
      .setMotherboard('MS4200')
      .setProcessor(null)
      .setMemory(null)
      .build();
  }

  // etc...
  createMacBookPro() {}
  createAsus5830() {}
}


// client module

// variant 1 (use builder only)
const builder1 = new ComputerBuilder();
const comp1 = builder1
  .setMemory('1024')
  .setMotherboard('MS4250')
  .setProcessor('core i7 8750k')
  .build();

const builder2 = new ComputerBuilder();
const comp2 = builder2
  .setMemory('8096')
  .setMotherboard('MK6230')
  .setProcessor('core i9 9230')
  .build();

// variant 2 (use builder + director)
const builder3 = new ComputerBuilder();
const director = new ComputerBuilderDirector(builder3);

const expensiveComputer = director.createExpensiveComputer();
const cheapComputer = director.createCheapComputer();
const makBookPro = director.createMacBookPro();
const asus5830 = director.createAsus5830();

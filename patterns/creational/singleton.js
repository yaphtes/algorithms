// Singleton (одиночка)
// Гарантирует, что в процессе приложения будет единственный экземлпяр класса.
// Предоставляет глобальную точку доступа к этому экземпляру (в данном случае вызов через new)


// pattern module
class Singleton {
  constructor(config) {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    // init config here...

    return Singleton.instance;
  }
}


// client module
const instance = new Singleton();
const instance2 = new Singleton();

instance == instance2 // => true

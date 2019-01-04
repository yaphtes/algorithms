// pattern module
class Singleton {
  constructor(params) {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    // can init here...

    return Singleton.instance;
  }
}


// client module
const instance = new Singleton();
const instance2 = new Singleton();

instance == instance2 // => true

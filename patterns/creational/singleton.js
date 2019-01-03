// pattern module
class Singleton {
  async constructor(params) {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }

    // initialization
    this.url = params.url;

    return Singleton.instance;
  }
}


// client module
const instance = Singleton.getInstance({ url: 'http://example.com' });

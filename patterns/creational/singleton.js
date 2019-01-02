// module
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


// client
const instance = Singleton.getInstance({ url: 'http://example.com' });

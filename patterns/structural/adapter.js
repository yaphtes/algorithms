// Adapter (адаптер)
// Позволяет объектам с несовместимыми интерфейсами работать вместте.
// Чаще всего имплементируется путем создания объекта-обертки над целевым интерфейсовм.


// incompatible interface module
class Http {
  request(method, url, data, done) {
    const xhr = new XMLHttpRequest();
    xhr.open(method.toUpperCase(), url);
    xhr.send(data);
    xhr.onload = function () {
      if (this.status == 200) {
        done(null, this.responseText);
      } else {
        done(this.statusText);
      }
    }
  }
}


// consumer interface module
class Repository {
  constructor(baseUrl, resource, httpClient) {
    this.baseUrl = baseUrl;
    this.resource = resource;
    this.httpClient = httpClient;
  }

  get url() {
    return `${baseUrl}/${resource}`;
  }

  getAll() {
    return this.http.get(this.url);
  }

  getOne(id) {
    return this.http.get(`${this.url}/${id}`);
  }

  create(data) {
    return this.http.post(this.url, data);
  }

  update(id, data) {
    return this.http.put(`${this.url}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${this.url}/${id}`);
  }
}


// pattern module
class HttpAdapter {
  constructor(http) {
    this.http = http;
  }

  get(url) {
    return new Promise((resolve, reject) => {
      this.http.request('GET', url, null, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  post(url, data) {
    return new Promise((resolve, reject) => {
      this.http.request('POST', url, data, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  put(url, data) {
    return new Promise((resolve, reject) => {
      this.http.request('PUT', url, data, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
  }

  delete(url) {
    return new Promise((resolve, reject) => {
      this.http.request('DELETE', url, null, (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(res);
        }
      });
    });
}}


// client module
const http = new Http();
const httpAdapter = new HttpAdapter(http)
const repo = new Repository('http://courses.com', 'course', httpAdapter);

repo.getAll()
  .then(courses => console.log(courses));
  
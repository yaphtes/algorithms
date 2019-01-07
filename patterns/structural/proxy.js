// Proxy (заместитель)
// Некая подмена реального объектта на другой. Клиент думает, что работает с искомым объектом.
// Паттерн похож на декоратор, с тем отличием, что декоратор нацелен на динмачиское добавление
// функционала в существующий объект, а прокси на контролирование доступа к (новому) объекту.
// В JavaScript паттерн уже реализован нативно через Proxy API
// Виды прокси (или когда применять: https://ru.wikipedia.org/wiki/%D0%97%D0%B0%D0%BC%D0%B5%D1%81%D1%82%D0%B8%D1%82%D0%B5%D0%BB%D1%8C_(%D1%88%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD_%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)#%D0%92%D0%B8%D0%B4%D1%8B)
// Мои любимые кейсы:
// Защищающий прокси
// Виртуальный прокси
// Кеширующий прокси (напр. мемоизация)
// Экранирующий прокси
// "Умная ссылка"


// pattern module (protected proxy example)
class InformationWithFullAccess {
  constructor(target, account) {
    const handler = {
      get(target, name) {
        if (account.getAccess() == 'full') {
          return target[name];
        } else {
          throw new Error ('Accesses is not full');
        }
      }
    };

    return new Proxy(target, handler);
  }
}


// clinet module
class Person {
  constructor({ firstname, lastname, job }) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.job = job;
  }

  getFullInfo() {
    return {
      firstname: this.firstname,
      lastname: this.lastname,
      job: this.job,
    };
  }
}

const account = {
  getAccess() {
    return 'full';
  },
};

const prezident = new InformationWithFullAccess(
  new Person({ firstname: 'Vladimir', lastname: 'Putin', job: 'agent' }),
  account
);

// successful access (denied if account accesses it not full)
prezident.getFullInfo();
prezident.firstname
prezident.lastname
prezident.job

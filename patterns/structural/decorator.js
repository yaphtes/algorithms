// Decorator (декоратор)
// Декоратор - это обёртка над сущностью, с целью добавления функционала этой сущности
// без изменения искомой сущности. В JavaScript декорируют, как правило, обычные функции (или классы).
// Докораторы можно компоновать.


// # 1
// pattern module
import isAdmin from 'credentials';

function checkPermissionDecorator(func) {
  return function(...args) {
    if (isAdmin()) {
      func.apply(this, args);
    } else {
      console.log('Недостаточно прав');
    }
  }
}

function logDecorator(func) {
  return function (...args) {
    console.info(args);
    func.apply(this, args);
  }
}


// client module
function save() { /* ... */ }
save = checkPermissionDecorator(save);
save = logDecorator(save);

save({ foo: 'bar' }) // => теперь вызов save проверяет права и логирует аргументы

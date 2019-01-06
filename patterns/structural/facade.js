// Facade (фасад)
// Используется для сокрытия сложности имплементации,
// предоставляет клиенту удобный и понятный интерфейс


// moodule pattern
function addEvennt(element, event, handler) {
  if (element.addEvenntListener) {
    element.addEvenntListener(event, handler);
  } else if (element.attachEvent) {
    element.attachEvent(`on${event}`, handler);
  } else {
    element[`on${event}`] = handler;
  }
}

function removeEvent(element, event, handler) {
  if (element.removeEvenntListener) {
    element.removeEvenntListener(event, handler);
  } else if (element.detachEvent) {
    element.detachEvent(`on${event}`, handler);
  } else {
    element[`on${event}`] = null;
  }
}


// cliennt module
addEvennt(elem, 'click', () => {});
removeEvent(elem, 'click', () => {});

let setCounter = upDateCounter();
function upDateCounter() {
  let counter = 1;
  return function() {
    return counter++;
  };
}

const users = [
  {
    id: setCounter(),
    name: 'Denis',
    surname: 'Monastyrskii',
    age: '26',
    isActive: true
  },
  {
    id: setCounter(),
    name: 'Artem',
    surname: 'Mazurenko',
    age: '20',
    isActive: false
  },
  {
    id: setCounter(),
    name: 'Sergiy',
    surname: 'Astrahancev',
    age: '30',
    isActive: true
  },
  {
    id: setCounter(),
    name: 'Anton',
    surname: 'Gonchar',
    age: '22',
    isActive: true
  },
  {
    id: setCounter(),
    name: 'Sergiy',
    surname: 'Babiy',
    age: '36',
    isActive: false
  },
  {
    id: setCounter(),
    name: 'Alex',
    surname: 'Vitkovskiy',
    age: '40',
    isActive: false
  }
];

export function getUsers() {
  return users.filter(user => user);
}

export function getUser(id) {
  return users.find(u => u.id === id);
}

export function getActiveUsers() {
  return users.filter(user => user.isActive);
}

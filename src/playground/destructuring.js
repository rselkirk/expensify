const person = {
  name: 'Matilda',
  age: 27,
  location: {
    city: 'Rossland',
    temp: 26
  }
};

// declare default value for name
const { name = 'Anonymous', age } = person;
// const name = person.name;
// const age = person.age;

console.log(`${person.name} is ${person.age}.`)

// rename an object key
const { city, temp: temperature } = person.location
if (city && temperature){
  console.log(`It's ${temperature} in ${city}.`)
}

const book = {
  title: 'Green Eggs and Ham',
  author: 'Dr. Seuss',
  publisher: {
    name: 'Penguin'
  }
}

const { name: publisherName = 'Self Published' } = book.publisher;

console.log(publisherName);
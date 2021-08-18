//
// Object destructuring
//

/*
const person = {
  name: "Sandor",
  age: 45,
  location: {
    city: "Kemnay",
    temp: 24,
  },
};

const { name: firstName = "Anonymous", age } = person;
console.log(`${firstName} is ${age}.`);

const { temp: temperature, city } = person.location;
if (temperature && city) {
  console.log(`It's ${temperature} in ${city}.`);
}

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
  publisher: {
    name: "Penguin",
  },
};

const { name: publisherName = "Self-Published" } = book.publisher;

console.log(publisherName);
*/

//
// Array destructuring
//

/*
const address = ["70 Fraser Place", "Kemnay", "Aberdeenshire", "AB51 5NH"];
const [, city, county = "AberdeenCity"] = address;
console.log(`You are in ${city} ${county}.`);
*/

const item = ["Coffee (iced)", "$3.00", "$3.50", "$3.75"];
const [itemName, , mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}.`);

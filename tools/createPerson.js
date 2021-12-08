const Person = require('../models/person')

async function createPerson() {
    // this function add one new person to people collection
    try {
        const person = await new Person({
            name: 'Sherif',
            age: 28,
            favoriteFoods:["Cheese Burger"]
        })
        person.save();
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = createPerson;
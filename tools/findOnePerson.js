const Person = require('../models/person')

async function findOnePerson() {
    // this function find one person from people collection
    try {
        const person = await Person.findOne({favorateFoods:"Cheese Burger"});
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findOnePerson;
const Person = require('../models/person')

async function findPeople() {
    // this function find all persons on people collection
    try {
        const person = await Person.find();
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findPeople;
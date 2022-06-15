const Person = require('../models/person')

async function createMany(arr) {
    // this function add multiple persons to people collection
    try {
        const people = await Person.create(arr)
        console.log(people);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = createMany;
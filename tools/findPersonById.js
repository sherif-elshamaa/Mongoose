const Person = require('../models/person')

async function findPersonById(id) {
    // this function take id as an argument
    // this function find one persons matching the id on people collection
    try {
        const person = await Person.findById(id);
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findPersonById;
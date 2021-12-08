const Person = require('../models/person')

async function findByIdAndRemove(id) {
    // this function take id as an argument
    // this function find one persons matching the id on people collection
    // then delete this person
    try {
        const person = await Person.findByIdAndRemove(id);
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findByIdAndRemove;
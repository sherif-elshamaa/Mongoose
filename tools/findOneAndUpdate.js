const Person = require('../models/person')

async function findOneAndUpdate(name, age) {
    // this function take name as an argument
    // this function find one persons matching the name on people collection
    // then update age to 20 years old
    try {
        const query = { name: name }
        const person = await Person.findOneAndUpdate(query, { $set: { age: age } }, { new: true });
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findOneAndUpdate;
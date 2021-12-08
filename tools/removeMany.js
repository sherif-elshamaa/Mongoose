const Person = require('../models/person')

async function removeMany(name) {
    // this function take name as an argument
    // this function find all persons matching the name on people collection
    // then delete all matches
    const query = { name: name }
    try {
        const res = await Person.remove(query);
        console.log(res);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = removeMany;
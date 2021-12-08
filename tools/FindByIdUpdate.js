const Person = require('../models/person')

async function findByIdUpdate(id) {
    // this function take id as an argument
    // this function find one persons matching the id on people collection
    // then add humburger to favoriteFood array
    try {
        const person = await Person.findById(id);
        person.favoriteFoods.push("hamburger");
        person.save();
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = findByIdUpdate;
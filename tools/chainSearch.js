const Person = require('../models/person')

async function chainSearch(food) {
    // this function takes food as an argument
    // this function find all persons on people collection
    // check if they have food argument on favoriteFoods
    const query = { food: food }
    try {
        const person = await Person.find(query)
            .limit(2)
            .sort({ name: 1 })
            .select({ name: true })
            .exec();
        console.log(person);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = chainSearch;
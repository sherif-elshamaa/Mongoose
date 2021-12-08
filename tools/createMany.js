const Person = require('../models/person')

async function createMany() {
    // this function add multiple persons to people collection
    try {
        const people = await Person.create([
            {
                name: 'Sherif',
                age: 28,
                favoriteFoods: ["Cheese Burger","burritos"]
            },{
                name: 'Mary',
                age: 25,
                favoriteFoods: ["Cheese Burger","burritos"]
            },
            {
                name: 'Mary',
                age: 17,
                favoriteFoods: ["Cheese Burger","burritos"]
            },
            {
                name: 'Ibrahim',
                favoriteFoods: ["Pizza","burritos"]
            },
            {
                name: 'Radwa',
                age: 28,
                favoriteFoods: ["shawerma","burritos"]
            }
        ])
        console.log(people);
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = createMany;
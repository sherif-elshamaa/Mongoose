let mongoose = require('mongoose');
require('dotenv').config({path: './config.env'});
let createPerson = require('./tools/createPerson')
let createMany = require('./tools/createMany')
let findPeople = require('./tools/findPeople')
let findOnePerson = require('./tools/findOnePerson')
let findPersonById = require('./tools/findPersonById')
let findByIdUpdate = require('./tools/findByIdUpdate')
let findOneAndUpdate = require('./tools/findOneAndUpdate')
let findByIdAndRemove = require('./tools/findByIdAndRemove')
let removeMany = require('./tools/removeMany')
let chainSearch = require('./tools/chainSearch')


async function connectDb() {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Mongodb connected");
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
connectDb();


// createPerson("sherif", 28, ["pizza"]);


// createMany([
        //     {
        //         name: 'Sherif',
        //         age: 28,
        //         favoriteFoods: ["Cheese Burger","burritos"]
        //     },{
        //         name: 'Mary',
        //         age: 25,
        //         favoriteFoods: ["Cheese Burger","burritos"]
        //     },
        //     {
        //         name: 'Mary',
        //         age: 17,
        //         favoriteFoods: ["Cheese Burger","burritos"]
        //     },
        //     {
        //         name: 'Ibrahim',
        //         favoriteFoods: ["Pizza","burritos"]
        //     },
        //     {
        //         name: 'Radwa',
        //         age: 28,
        //         favoriteFoods: ["shawerma","burritos"]
        //     }
        // ]
    // )


// findPeople();


// findOnePerson(
//     {favorateFoods:"Cheese Burger"}
// )




// findPersonById("61b001998deeec881107bc57");


// findByIdUpdate("61b001998deeec881107bc57","chesse burger")




// findOneAndUpdate("sherif", 28 )

  

// findByIdAndRemove("61b001998deeec881107bc58")



// removeMany("Mary")


// chainSearch("burritos")

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


// createPerson();
// {
//     name: 'Sherif',
//     age: 28,
//     favoriteFoods: [ 'Cheese Burger' ],
//     _id: new ObjectId("61affeaf33bbaac1f125f5c0"),
//     createdAt: 2021-12-08T00:39:11.896Z,
//     updatedAt: 2021-12-08T00:39:11.896Z
//   }

// createMany()
// [
//     {
//       name: 'Sherif',
//       age: 28,
//       favoriteFoods: [ 'Cheese Burger' ],
//       _id: new ObjectId("61b001998deeec881107bc56"),
//       createdAt: 2021-12-08T00:51:37.151Z,
//       updatedAt: 2021-12-08T00:51:37.151Z,
//       __v: 0
//     },
//     {
//       name: 'Ibrahim',
//       favoriteFoods: [ 'Pizza' ],
//       _id: new ObjectId("61b001998deeec881107bc57"),
//       createdAt: 2021-12-08T00:51:37.153Z,
//       updatedAt: 2021-12-08T00:51:37.153Z,
//       __v: 0
//     },
//     {
//       name: 'Radwa',
//       favoriteFoods: [ 'shawerma' ],
//       _id: new ObjectId("61b001998deeec881107bc58"),
//       createdAt: 2021-12-08T00:51:37.154Z,
//       updatedAt: 2021-12-08T00:51:37.154Z,
//       __v: 0
//     }
//   ]



// findPeople();

// [
//     {
//       _id: new ObjectId("61afffdcd64167458404f21f"),
//       name: 'Sherif',
//       age: 28,
//       favoriteFoods: [ 'Cheese Burger' ],
//       createdAt: 2021-12-08T00:44:12.134Z,
//       updatedAt: 2021-12-08T00:44:12.134Z,
//       __v: 0
//     },
//     {
//       _id: new ObjectId("61b001998deeec881107bc56"),
//       name: 'Sherif',
//       age: 28,
//       favoriteFoods: [ 'Cheese Burger' ],
//       createdAt: 2021-12-08T00:51:37.151Z,
//       updatedAt: 2021-12-08T00:51:37.151Z,
//       __v: 0
//     },
//     {
//       _id: new ObjectId("61b001998deeec881107bc57"),
//       name: 'Ibrahim',
//       favoriteFoods: [ 'Pizza' ],
//       createdAt: 2021-12-08T00:51:37.153Z,
//       updatedAt: 2021-12-08T00:51:37.153Z,
//       __v: 0
//     },
//     {
//       _id: new ObjectId("61b001998deeec881107bc58"),
//       name: 'Radwa',
//       favoriteFoods: [ 'shawerma' ],
//       createdAt: 2021-12-08T00:51:37.154Z,
//       updatedAt: 2021-12-08T00:51:37.154Z,
//       __v: 0
//     }
//   ]


// findOnePerson()
// {
//     _id: new ObjectId("61afffdcd64167458404f21f"),
//     name: 'Sherif',
//     age: 28,
//     favoriteFoods: [ 'Cheese Burger' ],
//     createdAt: 2021-12-08T00:44:12.134Z,
//     updatedAt: 2021-12-08T00:44:12.134Z,
//     __v: 0
//   }




// findPersonById("61b001998deeec881107bc57");

// {
//     _id: new ObjectId("61b001998deeec881107bc57"),
//     name: 'Ibrahim',
//     favoriteFoods: [ 'Pizza' ],
//     createdAt: 2021-12-08T00:51:37.153Z,
//     updatedAt: 2021-12-08T00:51:37.153Z,
//     __v: 0
//   }


// findByIdUpdate("61b001998deeec881107bc57")
// {
//     _id: new ObjectId("61b001998deeec881107bc57"),
//     name: 'Ibrahim',
//     favoriteFoods: [ 'Pizza', 'hamburger' ],
//     createdAt: 2021-12-08T00:51:37.153Z,
//     updatedAt: 2021-12-08T00:51:37.153Z,
//     __v: 0
//   }



// findOneAndUpdate("Ibrahim")
// {
//     _id: new ObjectId("61b001998deeec881107bc57"),
//     name: 'Ibrahim',
//     favoriteFoods: [ 'Pizza', 'hamburger' ],
//     createdAt: 2021-12-08T00:51:37.153Z,
//     updatedAt: 2021-12-08T00:51:37.153Z,
//     __v: 1,
//     age: 20
//   }
  

// findByIdAndRemove("61b001998deeec881107bc58")
// {
//     _id: new ObjectId("61b001998deeec881107bc58"),
//     name: 'Radwa',
//     favoriteFoods: [ 'shawerma' ],
//     createdAt: 2021-12-08T00:51:37.154Z,
//     updatedAt: 2021-12-08T00:51:37.154Z,
//     __v: 0
//   }



// removeMany("Mary")
// { deletedCount: 2 }



// chainSearch("burritos")
// [
//     { _id: new ObjectId("61b001998deeec881107bc57"), name: 'Ibrahim' },
//     { _id: new ObjectId("61b09496e4cc1d36572304c6"), name: 'Radwa' }
//   ]
  
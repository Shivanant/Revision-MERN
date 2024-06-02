// const fs=require('fs')
//CRUD operations
// use("crud")

// Create Operations


// db.createCollection('Cources')

// db.cources.insertMany([
//     {
//       "name": "Shivanant WEB DEV",
//       "price": 0,
//       "assignment": 12,
//       "projects": 45
//     },
//     {
//       "name": "Aarav JAVA",
//       "price": 1500,
//       "assignment": 10,
//       "projects": 30
//     },
//     {
//       "name": "Nisha PYTHON",
//       "price": 1800,
//       "assignment": 14,
//       "projects": 35
//     },
//     {
//       "name": "Vikram JAVASCRIPT",
//       "price": 1700,
//       "assignment": 16,
//       "projects": 40
//     },
//     {
//       "name": "Ananya RUBY",
//       "price": 1600,
//       "assignment": 9,
//       "projects": 25
//     },
//     {
//       "name": "Rohan SWIFT",
//       "price": 2100,
//       "assignment": 18,
//       "projects": 50
//     },
//     {
//       "name": "Kavya GO",
//       "price": 1900,
//       "assignment": 11,
//       "projects": 28
//     },
//     {
//       "name": "Ishaan KOTLIN",
//       "price": 2000,
//       "assignment": 13,
//       "projects": 33
//     },
//     {
//       "name": "Priya RUST",
//       "price": 2200,
//       "assignment": 20,
//       "projects": 55
//     },
//     {
//       "name": "Arjun PHP",
//       "price": 1300,
//       "assignment": 8,
//       "projects": 20
//     }
//   ]
  
// )

//Read operations

// let a =db.cources.find()
// console.log(a)

//Update operations

// db.cources.updateMany({price:0},{$set:{price:1000}})\


//DElete

// db.cources.deleteMany({price:1000})


//self playing

// use("crud")
// var data=db.cources.find()
// data=JSON.stringify(data.toArray())
// console.log(data)

// fs.writeFileSync('myfile.json',data,()=>{})
// above code takes the output of querry and place it into a json file


//advance querry
// db.cources.find({price:{$lt:2200}})

use('sigma')
db.courses.find({price:null})
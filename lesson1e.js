// object 
let person = {
    name : "juma",
    age : 20,
    isAdmin : true
}
console.log(person)
// accesss a key value pair 
// access name key value pair
console.log(person.name)

// array = list of values
const months = ["january","february","march","april","may","june","july","august","september","october","november","december"]
console.log(months)
// indexing an array
// access item in index no.4
console.log(months[4])
// slice from jan to april
console.log(months.slice(0,4))
// using splice insert item at index 1, delete 0 items
months.splice(1, 0, "items")
console.log(months)
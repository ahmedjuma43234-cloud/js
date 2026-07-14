// the challenge :  the movie ticket calculator
// you are builiding a ticket booking app write a conditional system that calculates the ticket prices based ono 3 variables
// age , isStudent(boolean), isWednesday(boolean)
// toddler : under 5 years old free
// senior : 65 and older 8 USD
// Wednesday Student discount : 6 USD
// regular student : 10 USD
// standard ticket : 12 USD
let age = 20;
let isStudent = true;
let isWednesday = true;

let ticketPrice;

if (age < 5) {
    ticketPrice = 0;
}else if (age >= 65) {
    ticketPrice = 8;
}else if (isStudent && isWednesday) {
    ticketPrice = 6;
}else if (isStudent) {
    ticketPrice = 10;
}else {
    ticketPrice = 12;
}
console.log('The ticket price is $' + ticketPrice);
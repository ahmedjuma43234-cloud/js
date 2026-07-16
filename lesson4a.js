const greet = () =>{
    console.log("annonymoous function")
}
greet()

// arrow function to add 2 numbers
const add = () =>{
    let a = 45
    let b = 67
    let sum = a + b
    console.log(`the sum of ${a} and ${b} is ${sum}`)

}


// mulitplication
const times = () =>{
    let num1 = 15
    let num2 = 24
    let multiply = num1 * num2
    console.log(`the multiplication of ${num1} and ${num2} is ${multiply}`)
}


// write an arrow function to check if a number is odd or even
const num3 = () =>{
    let number = 15
if (number %2 === 0){
    console.log(`even`)
}else{
    console.log(`odd`)
}
}
num3()

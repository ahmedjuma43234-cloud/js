// the temperature converter below is a traditional js function that converts temp from Fahrenheit to celsius using the formula
// C = (F - 32)* 5/9
const c = (F) =>{
    ans = (F - 32) * 5/9
    console.log(`the temperature is ${ans}`)
}

// the simple vault
// requirement 
// create an arrow function createVault that that accepts one parameter secretWord
// inside it requies anothe arrow function  this returned inner function should take a parameter password
// if the password is "openSesame" return the secretWord otherwise return "Access denied"

const createVault = (secretWord) =>{
    const innerVault = (password) =>{
        if(password === "openSesame"){
            console.log(`you have access to ${secretWord}`)
            return secretWord
        }
        else{
             console.log("Access denied")
             return "Access denied"
        }
    }
    return innerVault
}
createVault("innerVault")("openSesame")
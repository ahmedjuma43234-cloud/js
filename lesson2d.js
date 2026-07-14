// logical operators and conditional statements
let distance = 1200;
if (distance <= 0) {
    console.log("Invalid distance");
} else if(distance > 0  && distance <= 100){
    console.log("pay 5 USD");
}else if(distance > 100 && distance <= 500){
    console.log("pay 10 USD");
}else if(distance > 500 && distance <= 1000){
    console.log("pay 20 USD");
}else{
    console.log("pay 40 USD");
}
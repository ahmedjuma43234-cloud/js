// write a script to find and print the largest number in the array {10, 20, 4, 45, 99, 1}
let arr =[10,20,4,45,99,1]
let big = arr[0]//assuming the largest number is index 0 = 10
for (let i = 1; i<arr.length; i++){ 
    if (arr[i] > big){
        big = arr[i]
    }
}
console.log("The largest number is " + big)
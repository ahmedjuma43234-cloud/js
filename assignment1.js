const userAccount = {
    displayName: "Jo Dirt",
    planType: "Premium",
    monthlyCost: 15
}
console.log(userAccount)
const watchList = [
    "The Matrix",
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "Fight Club"
]

console.log(watchList.slice(0, 3))
let previewList = watchList.slice(0, 3)
console.log(previewList)

watchList.splice(1, 1)
console.log(watchList)
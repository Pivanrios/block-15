//declare an object with the custumers values
const customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!AudioListener.com",
    phone: undefined,
    zipCode:"621",
    favoriteFlavors: 32,
    cupSize:"medium",
    favoriteStore: "Target",
    firstVisit: false
}
console.table(customer)

//change custumers values
customer.email =  "Jak3Smith1992@email.com"
customer.phone = 3195551234
customer.zipCode = "63132"
customer.favoriteFlavors = ["strawberry", "coffe", "matcha"]

//delete custumer properties
delete customer.zipCode
delete customer.favoriteStore

//add properties
customer.toppings = ["chocolate sprinkles", "wafer straws", "gummy bears"]
customer.futureFlavor = "mango"
customer.todaysPurchaseCost = 5.32
//console.table(customer)
//print the objects key
console.log(Object.keys(customer))
//Task 1: Product Price Management Scenario: Online Store You are managing a product pricing system

let prices = [10,40,25,65,80]; // this line is assigning the variable prices to an array with numbers in it

prices.push(95); // this line is adding the number 95 to the end of the array
prices.splice(0,1,); // this line is deleting the first value (10) in the array

console.log("The prices are:", prices); // this line logs the array prices in the console

//Task 2: Modifying Customer Orders Scenario: Order List You are processing customer orders and need to update order quantities

let orders = [7, 12, 11, 20, 27]; // this line is creating an array named orders with number values

orders[2] += 5; // this line is adding 5 to the 3rd value in the array (11+5)

let total = orders.reduce((sum, order) => sum + order,0); // this line adds the numbers in the array together

// The next 2 line log the values of the array and the value of the array added together in the console
console.log("The orders are:",orders); 
console.log("Total orders:",total);

//Task 3: Employee Performance Tracking Scenario: HR System You are tracking employee performance data

// the lines below create an object named employee with different properties inside of it
let employee = {
    name: "Bruce Wayne",
    role: "Sales Representative",
    performanceScore: 25,
    isActive: true
};

employee.performanceScore = 80; // this line is updating the performanceScore variable in the object
employee.promotionEligible = true; // this line is adding a new variable in the object with a boolean value

console.log("Employee info:", employee); // this line logs the object values in the console
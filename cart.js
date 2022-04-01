///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
  {
    name: "pizza",
    price: 9.99,
  },
  {
    name: "pasta",
    price: 8.99,
  },
  {
    name: "salad",
    price: 7.99,
  },
];

//CODE HERE

const summedPrice = cart.reduce((acc, currVal) => {
  return acc + currVal.price;
}, 0);
console.log(summedPrice);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
  let totalPrice = cartTotal + cartTotal * tax - couponValue;
  return totalPrice;
};

console.log(calcFinalPrice(95, 15, 0.06));

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    NAME: string type, acting a means to identify the customer
    SHIPPING ADDRESS: string type, to know where any items ordered should be shipped
    BILLING ADDRESS: string type, its possible that the billing information will differ from the shipping (ie. sending gifts)
    CREDIT CARD NUMBER: number type, I am not sure if credit card values can be securely stored in objects, but if so, then to save the user the trouble of having to re-enter this information everytime they make an online purchase


*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customers = [
  {
    fullName: "Emmanuel Garzon",
    billingAddress: "123 Main Rd.",
    shippingAddress: "456 2nd Avenue",
    creditCardNumber: 123456789,
  },
  {
    fullName: "Hamato Yoshi",
    billingAddress: "123 Sewer Rd.",
    shippingAddress: "456 Park Place",
    creditCardNumber: 235475962,
  },
];

console.log(customers);

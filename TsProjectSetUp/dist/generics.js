"use strict";
//score is a array of numbers
const score = [];
const names = [];
function identityOne(arg) {
    return arg;
}
function identityTwo(arg) {
    return arg;
}
// here arg and return type are same thats the difference with anys
function identityThree(arg) {
    return arg;
}
// shortcut way of writing generics
function identityFour(arg) {
    return arg;
}
function identityFive(arg) {
    return arg;
}
function getSearchProducts(products) {
    // db operations
    const myIndex = 3;
    return products[myIndex];
}
//arrow function
const getArrowSearchProducts = (products) => {
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo
    };
}
anotherFunction(3, {
    connection: 'localhost',
    username: 'root',
    password: 'password'
});
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}

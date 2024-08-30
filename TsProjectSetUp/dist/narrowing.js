"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    return val + 3;
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
//in operator
function isAdminAccount(account) {
    if ("isAdmin" in account) {
        return account.isAdmin;
    }
}
//instanceof operator
function logValue(x) {
    //instanceof means that the object is an instance of the class
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined;
}
function getFood(pet) {
    if (isFish(pet)) {
        pet;
        return "fish food";
    }
    else {
        pet;
        return "bird Food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        return shape.side ** 2;
    }
    else {
        return shape.length * shape.width;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.side * shape.side;
        case "rectangle":
            return shape.length * shape.width;
        default:
            //type is never means that the type is not expected
            const _defaultforshape = shape;
            return _defaultforshape;
    }
}

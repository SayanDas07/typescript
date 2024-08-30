"use strict";
// class User {
//     //by default all the properties are public
//     email: string
//     public name: string
//     private readonly city: string = "kolkata"
//     constructor(email: string, name: string) {
//         this.email = email,
//         this.name = name
//     }
// }
class User {
    constructor(email, name) {
        this.email = email;
        this.name = name;
        this._courseCount = 1;
        //by default all the properties are public
        this.city = "kolkata";
    }
    //getter
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    //getter for courseCount
    get courseCount() {
        return this._courseCount;
    }
    //setter for courseCount
    //seter always take one argument and doest not return anything
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
    deleteToken() {
        console.log("Token deleted");
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const raja = new User("sd.com", "raja");
// console.log(raja.city)

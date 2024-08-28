"use strict";
// 
Object.defineProperty(exports, "__esModule", { value: true });
//myuser is a variable of type User so it should have all the properties of User
var myUser = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
};
console.log(myUser._id);
myUser.isActive = true;
console.log(myUser.isActive);

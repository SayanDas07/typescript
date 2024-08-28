"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
function signUp(username, password) {
    return {
        username: username,
        password: password
    };
}
console.log(signUp('admin', 'admin'));
var login = function (username, password) {
    if (password === void 0) { password = "sayan"; }
    return {
        username: username,
        password: password
    };
};
console.log(login('admin'));

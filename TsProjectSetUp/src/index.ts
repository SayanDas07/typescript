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

    protected _courseCount = 1
    //by default all the properties are public

    private readonly city: string = "kolkata"
    constructor(public email: string,
        private name: string) {


    }

    //getter
    get getAppleEmail(): string {
        return `apple${this.email}`
    }


    //getter for courseCount
    get courseCount(): number {
        return this._courseCount
    }

    //setter for courseCount
    //seter always take one argument and doest not return anything
    set courseCount(courseNum) {
        if (courseNum <= 1) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum
    }

    private deleteToken() {
        console.log("Token deleted");

    }
}


class SubUser extends User {
    isFamily: boolean = true
    changeCourseCount(){
        this._courseCount = 4
    }
}


const raja = new User("sd.com", "raja")

// console.log(raja.city)
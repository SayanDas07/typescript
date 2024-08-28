// 

// type Point = {
//     x: number;
//     y: number;
// };


// function printCoord(pt: Point) {
//     console.log("The coordinate's x value is " + pt.x);
//     console.log("The coordinate's y value is " + pt.y);
// }

// printCoord({ x: 100, y: 100 });

type User = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    credcardDetails?: number
}

//myuser is a variable of type User so it should have all the properties of User
let myUser: User = {
    _id: "1245",
    name: "h",
    email: "h@h.com",
    isActive: false
}

type cardNumber = {
    cardnumber: string
}

type cardDate = {
    cardDate: string
}

// cardDetails is a type which is a combination of cardNumber and cardDate
type cardDetails = cardNumber & cardDate & {
    cvv: number
}


console.log(myUser._id)
myUser.isActive = true
console.log(myUser.isActive)
// myUser._id = "1234" //error as _id is readonly




export { }
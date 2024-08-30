// const user: (string | number)[] = [3, "sd"]

//its a tuser of 3 types
let tUser: [string, number, boolean] = ["sd", 131, true]

let rgb: [number, number, number] = [255, 123, 112]

type User = [number, string]

//newuser is type of User and user is type of tuple of 2 types
const newUser: User = [112, "jhggy@google.com"]

newUser[1] = "sayan.com"


export {}
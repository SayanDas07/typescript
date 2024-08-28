let score: number | string = 33
score = 44
score = "55"


type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let me: User | Admin = {name: "sayan", id: 12}

me = {username: "serdgg", id: 45}


function getDbId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
  
}

getDbId(3)
getDbId("3")



//array 

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number | boolean)[] = ["1", "2", 3, true]

let seatAllotment: "aisle" | "middle" | "window"

seatAllotment = "aisle"
// seatAllotment = "pilot"

export {}
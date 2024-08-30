//score is a array of numbers
const score: Array<number> = []
const names:Array<string> = []

function identityOne(arg: boolean | number): boolean | number{
    return arg
}

function identityTwo (arg: any):any{
    return arg
}

// here arg and return type are same thats the difference with anys
function identityThree<Type>(arg: Type): Type {
    return arg
}

// shortcut way of writing generics
function identityFour<T>(arg: T): T {
    return arg
}

interface Bootle{
    brand: string,
    type: number
}

function identityFive<Bootle>(arg: Bootle): Bootle{
    return arg
}

function getSearchProducts<T>(products: Array<T>): T {
    // db operations
    const myIndex = 3
    return products[myIndex]
}

//arrow function
const getArrowSearchProducts = <T,>(products: T[]): T => {
    const myIndex = 4
    return products[myIndex]
}

interface Database {
    connection: string,
    username: string,
    password: string
}

function anotherFunction<T, U extends Database>(valOne:T, valTwo:U):object {
    return{
        valOne,
        valTwo
    }
}

anotherFunction(3, {
    connection: 'localhost',
    username: 'root',
    password: 'password'
})

interface Quiz{
    name: string,
    type: string
}

interface Course{
    name: string,
    author: string,
    subject: string
}

class Sellable<T>{
    public cart: T[] = []

    

    addToCart(product: T){
        this.cart.push(product)
    }
}
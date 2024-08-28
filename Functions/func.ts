function add (a: number, b: number): number {
    return a + b
}

console.log(add(1, 2))

function signUp (username: string, password: string) {
    return {
        username,
        password
    }
}

console.log(signUp('admin', 'admin'))


let login = (username: string, password: string = "sayan") => {
    return {
        username,
        password
    }
}

console.log(login('admin'))

function fail(msg: string): never {
    throw new Error(msg)
}



export {}
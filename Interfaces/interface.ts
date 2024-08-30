interface User {
    readonly dbId: number
    email: string,
    userId: number,
    googleId?: string,

    // return type of string
    startTrail(): string,

    // parameter of stirng type and return type of number
    getCoupon(couponname: string): number
    
}


// Interface vs Types

//1. re opening of interface is allowed
interface User {
    githubToken?: string
}

//2. interface can be implemented by class INHERITANCE
interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const sayan: Admin = {
    dbId: 1,
    email: 'dffd',
    userId: 1,
    googleId: 'd',
    startTrail: () => {
        return "trail started"
    },
    getCoupon: (name: "hitesh10") => {
        return 10
    },
    role: "admin"
}

// sayan.dbId = 2 



export{}
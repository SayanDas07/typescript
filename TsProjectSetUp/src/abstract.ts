//in abstract class we cannot create object of abstract class but we can create object of derived class


abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ) { }

    abstract getSepia(): void

    getReelTime(): number {
        //complex calculation
        return 454
    }

}

class insta extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ) {
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");

    }

}

const sayan = new insta("portrait", "normal",555)


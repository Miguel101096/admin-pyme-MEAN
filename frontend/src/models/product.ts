export class Product {
    constructor(
        public _id: string,
        public name: string,
        public description: string,
        public price: number,
        public type: string,
        public size: string,
        public image: string,
    ) {
    }
}
export class User{
    constructor(
        public id:number,
        public name:string,
        public documento:number,
        public email:string,
        public celular:number,
        public password:string,
        public created_at:string
    ){}
}
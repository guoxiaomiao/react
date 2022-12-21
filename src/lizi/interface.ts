interface Person {
    readonly id : string;
    firstName : string;
    age? : number;
} 
let  kitty: Person = {
    id : '123',
    firstName : 'kitty',
    age : 18
}
kitty.firstName ='456'
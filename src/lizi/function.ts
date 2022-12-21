function add(a:number,b:number,c:number = 5):number {
    if(typeof c === 'number'){
        return a+b+c
    }
    return a+b
}
let result = add(1,2,4)

let add2 =function(a:number,b:number,c:number = 5):number {
    if(typeof c === 'number'){
        return a+b+c
    }
    return a+b
}
const add3 : (a:number,b:number)=>number = add2
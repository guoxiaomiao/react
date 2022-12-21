function echo<T>(age:T):T {
    return age
}
const result1 = echo("str")
function swpe<U,T>(a:[U,T]):[T,U]{
    return [a[1],a[0]]
}
const result2 = swpe(["string",123])

function echoWithArr<T>(age:T[]):T[] {
    console.log(age.length)
    return age
}
const arr1 = echoWithArr([1,2,4])

interface IWithLength{
    length:number
}

function echoWithLength<T extends IWithLength>(arg:T):T {
    console.log(arg.length)
    return arg
}
const str = echoWithLength('123')
const arr = echoWithLength([1,2,4])


class Queue22<T> {
    private data:Array<T> = [];
    push(item: T) { return this.data.push(item) }
    pop() { return this.data.shift() }
}
     
const queue22 = new Queue22<number>()
queue22.push(1)
const poped = queue22.pop()

interface keyPair<T,U>{
    key:T,
    value:U
}
let KP1: keyPair<string,number> = {key:'str',value:123}
let kp2: keyPair<number,string> = {key:123,value:'str'}
let arr2 : Array<number> = [1, 2, 3]

type PluseX = (x:number,y:number) => number
function sum(x: number, y: number):number {
    return x + y
}
const sum2 :PluseX = sum

type nameReslover = () => string
type nameOrReslover =  nameReslover | string
function getName(n: nameOrReslover ): string {
    if(typeof n === 'string'){
        return n
    }else{
        return n()
    }
}

//type assertion
function getLength(input:string | number) : number {
    // const str = input as string
    // if(str.length){
    //     return str.length
    // }else{
    //     const number = input as number
    //     return number.toString().length
    // }
    
    if((<string>input).length){
        return (<string>input).length
    }else{
        return input.toString().length
    }
}
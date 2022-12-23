const numbers=[1,2,3,4,5,6,7]
const funcion=arr =>{
    return arr.map(x=>x+3).filter(x=>x<7)
}
console.log(funcion(numbers))
//destructuring an Object

const spaceship = {
  pilot: "elon musk",
  guidance: "marc zucc",
  chef: "gordon ramsay",
};
const { pilot, chef } = spaceship
let { guidance } = spaceship

console.log(pilot) // 'elon musk'
console.log(chef) // 'gordon ramsay'
console.log(guidance) 

console.log('*******************')
console.log('Array Destructuring')
console.log('*******************')
arr = [1,2,3,4]
let [a,b,c,d] = arr
let diff = arr[-1]
console.log(a)
console.log(b)
console.log(c)
console.log(d)



//make a kitten class 

class Kitten {
    constructor(name){
        this.name = name
    }
}

const kitten = new Kitten('daKitty')
console.log(kitten)

console.log('*****************')
console.log('Objects')
console.log('*****************')

//key value assignment shortcut 
//create some vairables 
let name = 'Raul'
let age = 28
let numOfEpisodes = 100
let raul = {
    name : name,
    age : age,
    numOfEpisodes : numOfEpisodes
}

console.log(raul)
//assign them in an array 


//better way? 
let newRaul = {
    name, 
    age, 
    numOfEpisodes
}
console.log(newRaul)


//arrow functions 
//traditional functiion
// function logName(name){
//     console.log(name)
// }
//arrow function
const logName = name => {
    //arrow functiion
    console.log(name)
}
const explicitReturn = () => {
    return 'some value'
}
const implicitReturn = () => 'some value'
debugger
console.log(implicitReturn())

console.log('*******************')
console.log('******SPREAD*****')
console.log('*******************')
//SPREAD operator 
const  turing = ['Donovan', 'Emily', 'Devante', 'Adri', 'Triston']
turing.push('Angelo')
console.log(turing)

const  newTuring = [...turing, 'Angelo']
console.log(newTuring)


//Array FUN
//table groups 
const borg = ['Shane', 'Ian', 'Andre', 'Cori', 'Jose']
const fox = ['Robert', 'Nestor', 'Hadi', 'Brian', 'Luis', 'Udenna']


//forEach
const borgArr = borg.forEach(name => console.log(name))
console.log('return value of borgArr', borgArr)

//filter
const borgFilter = borg.filter(student =>  student.length > 4)
console.log(borgFilter)

//map
const foxMap = fox.map(student => student+'!')
console.log(foxMap)
console.log(fox)




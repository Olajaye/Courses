
let age: number = 20;

if (age < 50)
  age += 10



// let sales: number = 1234556;
// let course: string = "TypeScripts";
// let is_puchase: boolean = true

// it takes the any type automatically 
// let level;

// let number: number[] = [1, 2, 3]


//Tuples tuples is a fixed lenght array where each element have a paticuler type 
// let user: [number, string] = [1, "gbolahan"]


//enums list of related constant 
// const small = 1
// const medium = 2
// const large = 3

// if enums is defined with const the js code will be short 
enum Size {
  Small = 1,
  Medium,
  Large,
}
console.log(Size.Medium)



// function

// "noUnusedParameters": true, will detect unused parameters
// "noUnusedLocals": true, will detect unused varables

// "noImplicitReturns": true, will detect incorrect return value   
// functions that takes in a number type and return a number type
function calculate(income: number, taxyear = 2022): number{
  // let x;

  if (taxyear > 2022)
    return income * 1.2
 return 0 + income
}
console.log(calculate(10_00))
// functions that takes in a number type and return a number type
function Add(income: number): void{
  console.log(income + 1)
 
} 
console.log(Add(50))

//Type aliases
type Employee ={
 readonly id: number,
  name: string,
  retire: (date: Date)=> void
}


//objects
const empoyee: Employee = {
  id: 1,
  name: "mosh",
  retire: (data: Date) => {
    console.log(data)
  }
}
console.log(empoyee)

//Union Type

function kgToLabs(weight: number | string):number
{
  //narrowing
  if (typeof weight === "number")
    return weight * 2.2
  else 
    //use parseInt to convert to number
    return parseInt(weight) * 2.2

}

//intersection type
type Draggable = {
  drag: ()=> void
}

type Resizeable = {
  resize: ()=> void
}

type UIWidget = Draggable & Resizeable

let textBox: UIWidget = {
  drag: () => {},
  resize: ()=> {}
}

//liter type
//(exact , specific)
type Quantity = 50 | 100
let quantity:Quantity = 100 
 

// null type








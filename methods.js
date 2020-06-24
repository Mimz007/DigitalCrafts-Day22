//let modernFamily = ['peter', 'louis', "meg", 'stewie','briam']
//let results = modernFamily.map(name, index)=>{
//    return [char.name,index] //return value sent to new array
//}
////use a Map function when you need the items in the array to have an action
//results = modernFamily.map((char,index)=>)
//return{
//    name:name
//    inmodernFamily:
//}
//
//familyGuy.map(name=>`${name} is smart`)
//
//familyGuy.map(name`${name}/` .repeat(100).split("/", 100))
////let ot = object.assign({name:"leah"}, {lew: "lew"})
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
Write a function that will recieve a sentance as a string and return another string of only the letters that MATCH 
the requirement of being upper case JOINed together. Hint you will be using a string method and an array method.
*/
const upperString = string =>{
    const regex = /[A-Z]/g;
    const upper = string.match(regex)
    console.log(upper)
    return upper.join ("")
  }
  console.log(upperString('Hello my Name is Amy Lazos'))

//Write a function that will return the KEYS of an object as an array and have the array SORTed in alphebetical order.
//Array.sort() method
const bestFreinds = ['Toyin', 'Kerri', 'Chioma', 'Bonita'];
bestFreinds.sort();
console.log(bestFreinds);


/*Write a function that will accept an Array of numbers as a parameter and return 
the first number that it FINDs that is greater than 
a second parameter. Hint I told you that you would see this on MDN.
*/

//array.prototype.find()
const array1 = [5, 12, 8, 130, 44];

const found = (ar, compare) => ar.find(e=>e>compare);

findFunc(array1, 4)

/*Write a function that accepts 2 objects and returns a new object that 
is made up of the two objects.  The resulting object must not modify 
either of the two objects in the parameters.
*/

object

/*EXERCISE 1
Create a function that accepts an array as an argument and for every item 
in the array return a new array of objects where each object has two keys. 
Item and index. The value should be the element from the array and the index respectivly. 
*/
//use .map



let familyGuy = ['peter', 'louis', 'stewie', 'brian', 'meg', 'chris'];
let familyGuy2 = familyGuy.map(function(name, index){
    return name + ':' + index;
});
console.log(familyGuy2);


 


/*EXERCISE 2
Use the array of object provided in the file "swapi.js" for the next several items.*/

var swapiNamesArray = ["erica", "amy", "grant","chima", "jen"]; ////2a.  Create an array of only the names.

///2b.   Create an array that includes the name and mass of all charectors who mass is greater than 50.
/////////////2b.   Make sure you check the type of the mass.
///2c.   Create an array of objects of only the characters that have at  least one starship. 
/////    The objects only need 'name' and 'hasStarship' as its keys.
///2d.   Create an array of names of only the charecters who have both a starship and a vehicle. */

import swapi


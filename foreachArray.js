//let favNumbers = ['2', '4', '6', '8'];
//favNumbers.forEach(function(name) {
//    console.log(name)
//})
//
//let modernFamily = ['peter', 'louis', 'stewie', 'meagan']
//modernFamily.forEach(callback)
//let sum2 = (a, b) => a+ b 
//
//for(let i = 0; i < modernFamily.length; i++){
//    callback(modernFamily[i])
//}
//modernFamily.forEach(name => console.log()`${name} is in star wars`)

let familyGuy = ['peter', 'louis', 'meg', 'stewie', 'brian']

let template = {
    name:null,
    side:"light",
    height: 'normal'
}

familyGuy.forEach(name, index) =>{
    res = Object.assign({}, template);
    res.name = name;

    if (name == 'stewie' || name == 'louis'){
        res.height = "smart"
    }
}


console.log('file checked');

let myCat = {
    "name": "Colonel Miaou",
    "species": "cat",
    "favFood": "tuna" 
}

// myCat.name

var inventory = ["tuna", "croquettes", "egg"];

// inventory[2];


var thePets = [
    {
    "name": "Colonel Miaou",
    "species": "cat",
    "favFood": "tuna" 
    },
    {
    "name": "Patounet",
    "species": "cat",
    "favFood": "salt" 
    }
];

// thePets[1].favFood

var req = new XMLHttpRequest();
req.open('GET', "https://github.com/RosuBobu/pr0nPr0t0type/blob/master/data.json" );
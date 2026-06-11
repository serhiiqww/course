"use strict";

let obj = {
    a: 1,
    b: 2,
    c: 3
};

obj.d = 4;

console.log(obj.d); 
console.log(obj['a']); 

let store = "My store";

let storeDescription = {
    budget: 10000,
    employees: ['Stas', 'Denis', 'Mark'],
    products: {
        banana: 50,
        ananas: 60
    },
    open: true
}

console.log(storeDescription.employees);



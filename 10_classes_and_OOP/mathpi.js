const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);


// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);


const obj = {
    name: "harsh",
    age: 21
}

const mynewObj = Object.create(obj)

// When you use Object.create(obj), the new object (mynewObj) doesn't have its own properties,
//but it inherits properties from obj via its prototype. This means that mynewObj can access the properties of obj 
//(like name and age), but these properties don't exist directly on mynewObj itself—they exist in its prototype.

// console.log(mynewObj.name);
// console.log(mynewObj.age);

// ****************************************

const chai = {
    name: "gingerChai",
    price: 250,
    isAvailable: true,

    orderChai: function(){
        console.log("chai is not ready");
    }
}

// console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//changing the value of the properties inside chai object

Object.defineProperty(chai, "name", {
    writable: false,
    enumerable: false
})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//as enumerable is false, lets try to loop on this object and see whether we are able to loop over it or not
for (let [key, value] of Object.entries(chai)) { 
    if(typeof value !== "function"){
        console.log(`${key}: ${value}`);
    }
}
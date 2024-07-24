//let myName = "harsh     ";
// console.log(myName.trueLength); //it will say that trueLength is undefined

//now we want to add a method "trueLength" that tells the true length of string, and add this functionality to every String created

let myHeros = ["thor", "spiderman"];
let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

//can we do this?
// heroPower.harsh() //do we have such method available?
//but we can inject method from our side

//we will directly declare inside Object, then that functionality will be automaticlly available in all the things that are objects

Object.prototype.harsh = function(){
    console.log("harsh is present in all objects.");
}

heroPower.harsh();
myHeros.harsh();


//let's check if we pass functionality into Array (which is also an object) only, then will it be available to other things that are object
Array.prototype.heyHarsh = function(){
    console.log("harsh says hello");
}

myHeros.heyHarsh();
// heroPower.heyHarsh(); //it will throw an error

// ***********INHERITANCE***************
const user = {
    name: "chai",
    email: "chai@google.com"
}


const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS assignment",
    fullTime: true,
    __proto__: teachingSupport //now TASupport can access all the properties of teachingSupport, and new objects of TASupport can also access the properties of teachingSupport
}

//now every object is an instance in itself, they are not sharing any proerties with each other
// in some situation we want to share information, or we can say link 2 objects,
// for linking purpose we use a property inside prototype known as "__proto__"

//WE CAN ALSO LINK 2 OBJECTS OUTISDE ALSO
teacher.__proto__ = user; //now teacher can also access all the properties of user and new objects of teacher can also access all the proeprties of user

//NEW APPROACH OF LINKING OBJECTS
Object.setPrototypeOf(teachingSupport, teacher); //now teachingSupport and its new objects/instances can access all the properties of teacher 

// ********NOW LET'S CREATE THAT TRUELENGTH METHOD*************

let anotherUsername = "javascript     ";
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`)
}

anotherUsername.trueLength();
"harsh".trueLength();
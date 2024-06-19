const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumbers.map( (num) => num + 10 );

const newNums = myNumbers.map( (num) => num* 10 ).map( (num) => num + 1 ).filter( (num) => num > 40 );
console.log(newNums);

//PERFORMING ABOVE METHOD USING FOREACH
const newValue = [];
myNumbers.map( (dum) => {
    if(dum < 11){
        dum = dum + 10;
        newValue.push(dum);
    }
} );
// console.log(newValue);
//In javascript, we have 2 types of array
//continous/packed and holey array

//optimization of array is done in every language, but in js there are 3 kinds of optimization

// 1) SMI (small integer)
// 2) Packed element
// 3) Double (float, string, function)

//both continous and holey array comprises of these 3 types of arrays


//based on what elements we have in our array and on what position, internally js optimizes these arrays
//example: if there are numbers inside an array then there is a diff optimization & if there is string then there is diff optimization
//also if the array is continous, then there is a diff optimization and if the array is holey then there is a diff optimization

const arr = [1, 2, 3, 4, 5]; //Packed_SMI_elements or continous_SMI_elements and it is the most optimized type of array
//in packed_SMI_elements we can only have numbers, not even decimal number

arr.push(6.0) //now if we push a floating value 
//now it is Packed_double_elements

arr.push("7"); //now if we push a string inside this array
//now this becomes Packed_element and it will have a diff optimization



//now suppose we want to convert packed_double_elements to packed_SMI_elements again by deleting "6.0", but we cant convert it back
//even after deleting, compiler can not perform optimization that way, once downgraded, we can't reverse it




//suppose we did this
arr[10] = 11; //pushing 11 on 10th position of array
// console.log(arr);
//it becomes Holey_elements because there are multiple types inside it, such as integers, float, string, holes, and its optimization will be different




console.log(arr); //we will see some empty spaces here inside this array, and these empty spaces i.e holes made our array less optimized
console.log(arr.length);
console.log(arr[9]); //it will print undefined, and this undefined here is a very costly operation





//lets see how does array find any value at a particular index

//1) whenever we want to access any value from array, the first thing to happen is bound check
//Bound Check - it is the easiest step, that array is starting from this position, this is the length, and ending here, 
//and if the user asks something out of the array, then quicky respond back that you are aksing out of bound value and return undeifned


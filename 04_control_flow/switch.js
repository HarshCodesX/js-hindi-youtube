// SYNTAX of switch
// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month = "march";

switch (month) {
    case "january":
        console.log("january");
        break;
    case "february":
        console.log("february");
        break;
    case "march":
        console.log("march");
        break; //if this break was not there, all the case below it would run without checking, EXCEPT DEFAULT CASE
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}
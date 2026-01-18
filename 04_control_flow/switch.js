/* syntax for switch statement
 switch(key){
    case value:
        break;
        defaut:
        break;
} 
*/
       const month = 5                        // month = "may" --> can also match string values just specify string in cases
       switch (month){
        case 1:                               // case "jan" --> can also make case like this to match string values
                console.log("January");
                break;
        case 2:
                console.log("Febuary");
                break;                       // break is used to break the flow otherwise all cases will be checked code will run.
        case 3:
                console.log("March");
                break;
        case 4:
                console.log("April");
                break;
        case 5:
                console.log("May");
                break;
        case 6:
                console.log("June");
                break;
        case 7:
                console.log("July");
                break;
        case 8:
                console.log("August");
                break;
        case 9:
                console.log("September");
                break;
        case 10:
                console.log("October");
                break;
        case 11:
                console.log("November");
                break;
        case 12:
                console.log("December");
                break;

        default:
                console.log("default case match");
                break;
            
       }

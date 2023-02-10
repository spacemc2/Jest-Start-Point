// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// one euro is:
let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar){
    return (dollar/oneEuroIs.USD)*oneEuroIs.JPY;
}



function fromEuroToDollar(euro){
   return euro*oneEuroIs.USD;
}

function fromYanToPound(yen){
    return (yen/oneEuroIs.JPY)*oneEuroIs.GBP;
}

console.log(fromYanToPound(1000).toFixed(2));

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum,fromDollarToYen,fromEuroToDollar,fromYanToPound };
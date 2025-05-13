//2. Sum All Numeric Values in an Object

// Write a function that adds up all the numeric values in an object.

// Example

// Input: { apples: 5, bananas: 10, oranges: 8, name: "Saqib" }

// Output: 23

function SumNumericValue(obj={}){
    let sum=0
    for (const key in obj) {
        if(typeof obj[key]=="number"){
            sum=sum+obj[key]
        }
    }
    console.log(sum)

}

SumNumericValue({ apples: 5, bananas: 10, oranges: 8, name: "Saqib" })
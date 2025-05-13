//3. Filter an Object Based on Value Type

// Write a function that returns a new object containing only the key-value pairs where the values are of a certain type (e.g., numbers).

// Example

// Input: { name: "Saqib", age: 28, score: 33, active: No }

// Output: { age: 28, score: 33 }

function FilterObject(obj={}){
    let output={}
    for (const key in obj) {
        if(typeof obj[key]=="number"){
            output[key]=obj[key]
        }

    }
    console.log(output)

}

FilterObject({ name: "Saqib", age: 28, score: 33, active: "No" })

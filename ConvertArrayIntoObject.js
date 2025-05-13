//1. Write a function that converts an object into an array of key-value pairs.
// Example
// Input: { d: "dev", o: "origin", do: "devorigin" }
// Output: [ [ "d", "dev" ],   ["o", "origin" ],  ["do", "devorigin"] ]

function convert_to_array(obj={}){
    let arr=[]
    let i=0
    for (const key in obj) {
        arr[i]=[key,obj[key]]
        i++
    }
    console.log(arr)
}

// convert_to_array({a : "aaa" , b : "bbb" , c : "ccc"})
convert_to_array({ d: "dev", o: "origin", do: "devorigin" })


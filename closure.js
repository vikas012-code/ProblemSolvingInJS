//closures
let name="diksha"

function outer(){
    
    return function inner(){
       
        return function innermost(){
            
            return function innermostmost(){
                console.log(name)
            }
        }
    }
}

outer()()()()



// function outer(){
//     let count=0
//     function inner(){
//         count++
//         console.log(count)
//     }
//     return inner;
// }


// const fun=outer();


// fun()

// fun()


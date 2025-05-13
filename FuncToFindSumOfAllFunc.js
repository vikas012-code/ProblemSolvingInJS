// function sum(a){
//     let totalsum=0
//     totalsum+=a
//     return function(a){
//         totalsum+=a
//         return function(a){
//             totalsum+=a
//             return function(a){
//                 totalsum+=a
//                 return function(){
//                     return totalsum;
//                 }
//             }
//         }
//     }
// }
// console.log(sum(1)(3)(4)(5)());

// let totalsum=0
// function sum(a){
//     totalsum+=a
//     return function inner(a){
//         if(a){
//             return sum(a)
//         }
//         else{
//             return totalsum;
//         }
//     }
// }
// console.log(sum(1)(3)(4)(5)(7)(9)());

let totalsum=0
function sum(a){
    totalsum+=a
    return function inner(a){
        totalsum+=a
        return function inner(a){
            totalsum+=a
            return function inner(a){
                totalsum+=a
                return function inner(a){
                    totalsum+=a
                    return function inner(a){
                        totalsum+=a
                        return function inner(){
                            totalsum+=a
                            return totalsum
                        }
                        
                    }
                    
                }
                
            }
            
        }

    }
}
console.log(sum(1)(3)(4)(5)(7)(9)());



// function findDup(arr=[]){
//     let out=false;
//     let duplicat=[];
//     let len=arr.length;
//     // for(let i=0;i<arr.length;i++){
//     //     for(let j=i+1;j<=arr.length-1;j++){
//     //         if(arr[i]===arr[j]){
//     //             out=true;
//     //             duplicat.push(arr[i])
//     //         }
//     //     }
//     // }
//     let i=0;
//     function Dup(arr){
//         console.log("arr[i]",arr[i])
//         if(len==0){
//             return
//         };
//         if(arr[i]==arr[i+1]){
//             duplicat.push(arr[i+1])
//         }
//         else{
//             i++
//             Dup(arr[i])
//         }

//     }
//     Dup(arr=[])
//     console.log(out ,duplicat)
// }

// findDup([1,2,2])
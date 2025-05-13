// function RotatingArray(arr,target){
//     let rotation=0
//     for (let i = 0; i < arr.length; i++) {
//         console.log("array ",arr)   
//         if(arr[0]===target){
//             return rotation;
//         }
//         else{
//             let element=arr.shift()
//             arr.push(element)
//             rotation++
//         }
//     }

//     return -1
// }



// function RotatingArray(arr,target){
//     let max=arr.length-1
//     let rotation=0;
//     let newArr=[]
//     // newArr[0]=arr[0]
//     let num=1
//     for (let i = 0; i < arr.length ; i++) {
//          newArr[0]=arr[i]
//             console.log("times ",i+1)
//             console.log("array ",arr)
//             console.log("\n new array ",newArr)
//         if(newArr[0]===target){
            
//             return rotation
            
//         }
//         else{
//             newArr[max-1]=arr[i]
//             for(let j=0;j<=i+1;j++){
//                 console.log("\n new array ",newArr)
//                 newArr[max-1]=newArr[max]
//             }
            
//         }
        
//     }
    
//     return -1
// }
// //2 3 1
// console.log("[1,2,3,4] , 3 : ",RotatingArray([1,2,3],2))


// function RotatingArray(arr,target){
//     //debugger
//       let max=arr.length-1
//       let rotation=-1
//       let newArr=[]
//       // newArr[0]=arr[0]
//       let num=1
//       let match=false
//       for (let i = 0; i < arr.length ; i++) {
        
//            match?newArr[1]=arr[i]:newArr[0]=arr[i];
            
//             if(newArr[0]==target){
//             rotation=i;
//             match=true
            
//             for(let j=0;j<i;j++){
//               newArr[max-i+j]=newArr[max-i+1+j]
//             } 
//             newArr[max]=arr[i]
//            console.log(newArr) 
//           }
//         else{
//           for(let j=0;j<i;j++){
//               newArr[max-i+j]=newArr[max-i+1+j]
//             } 
//             newArr[max]=arr[i]
//           console.log(newArr)
//         } 
//       }
//      console.log(newArr)
//       return rotation 
//   }
//   //2 3 1
//   console.log("[1,2,3,4] , 4 : ",RotatingArray([1,2,3,4,5],4))



// function RotatingArray(arr,target){
//     let max=arr.length-1
//     let rotation=-1
//     let newArr=[]
//     let num=1
//     let match=false
//     for (let i = 0; i < arr.length ; i++) 
//     {
//         if(match){
//           newArr[num]=arr[i];
//           num++;
//         }
//       else{
//         newArr[0]=arr[i]
//         rotation++
//       }
          
//         if(newArr[0]==target)
//         {
//           match=true 
//         }
//          else
//          {
//             for(let j=0;j<i;j++)
//             {
//                 newArr[max-i+j]=newArr[max-i+1+j]
//             } 
//             newArr[max]=arr[i]
            
//         } 
//     }
//     console.log("newArr ",newArr)
//     arr=newArr;
//     if(match)
//     {
//       return rotation
//     }
//         else
//     {
//       return -1
//     }
// }

// console.log(" [0,1,2,3,4] , 2: ",RotatingArray( [0,1,2,3,4] , 2))





// function RotatingArray(arr,target){
//     debugger
//       if(arr.length==0) return -1;
  
//       let start = 0;
    
//       let once=true
//       let mid = Math.round(arr.length/2);
//           for(let i=0; i<arr.length; i++){
            
//               if(arr[mid]==target){
//                   return mid;
//               }
            
            
//                 if(i>=arr.length/2-1)
//               {
//                 mid=Math.floor((arr.length-1)/4)
//                 if(once){
//                   start=0 
//                   once=false
//                               }else{
//                   start=mid
//                 } 
//                 if(arr[mid]<target)
//                 {
                  
//                   mid=Math.floor((start+(arr.length-1))/2)
//                   if(arr[mid]==target)
//                   {
//                   return mid;
//                       }
//               }
//               else
//               {
//                   mid=Math.floor((start+mid)/2);
//                     if(arr[mid]==target)
//                   {
//                   return mid;
//                       }
//               }
//               }	
            
            
//               else
//               {
//                   if(arr[mid]<target)
//                   {
//                     start=mid
//                     mid=Math.ceil((start+(arr.length-1))/2)
//                     if(arr[mid]==target)
//                     {
//                     return mid;
//                         }
//                     }
//                 else
//                 {
//                     mid=Math.floor((start+mid)/2);
//                     if(arr[mid]==target)
//                     {
//                     return mid;
//                         }
//                 }
//               }
                
//           }
//       return -1;
      
//   }
  
//   console.log(RotatingArray( [4,5,6,0,1,2,3] ,6))
  





function RotatingArray(arr,target){
    if(arr.length==0) return -1;

    let start = 0;
    let mid = Math.round(arr.length/2);
        for(let i=0; i<arr.length-1; i++){
            if(arr[mid]==target){
                return mid;
            }
            if(arr[mid]<target){
                start=mid
                mid=Math.round((start+arr.length)/2)
                if(arr[mid]==target){
                    return mid;
                }
            }
            else{
                mid=Math.round((start+mid)/2);
                if(arr[mid]==target){
                    return mid;
                }
            }
        }
    return -1;
    
}

console.log(" [0,1,2,3,4] , 2: ",RotatingArray( [3,4,5,0,1,2] , 3))



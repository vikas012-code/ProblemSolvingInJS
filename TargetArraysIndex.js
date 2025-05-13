// function search(arr,tr){
//     let target="";
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]==tr){
//             target=target+"  "+i;
//         }
//     }
//     if(target==""){
//     return target=-1;
//     }
//     else
//     return target;
// }
// console.log(search([10,5, 8, 12,10,16,10],10));

function search(arr,tr){
        let target=[];
        for(let i=0;i<arr.length;i++){
            if(arr[i]==tr){
                target.push(i);
            }
        }
        if(target.length==0)
            {
            return -1;
            }
        else{
            return target;
            }
    }
    console.log(search([5,8,10,12,16],10));
    

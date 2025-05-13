arr=[1,2,3,4];

function multi(num){
    return num*2;
}

Array.prototype.custome_map=function(callback){
    let new_arr=[];
     for(let i=0;i<this.length;i++){
        new_arr.push(callback(this[i]))
     }
     return new_arr;
}

console.log(arr.custome_map(multi));
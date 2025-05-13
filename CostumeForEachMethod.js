const arr=[1,2,3,4];

function multi(num){
    return num*2;
}

Array.prototype.custome_foreach=function(callback){
    for(let i=0;i<this.length;i++){
        callback(this[i]);
    }
}

let arr2=[];

arr.custome_foreach((Element)=>{
    arr2.push((multi(Element)));
});
console.log(arr2)
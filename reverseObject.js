function reverse_obj(para={}){
    let newobj={}
    console.log(para)
    for (const key in para) {
        if(typeof para[key]=="object"){
            newobj[JSON.stringify(para[key])]=key
        }
        else{
            newobj[para[key]]=key
        }
        
    }
  return newobj
}

console.log(reverse_obj({a:"aaa",b:"bbb",c:{d:"ccc"}}))

function price(prices=[]){
    if(prices.length==0){
        return 0
    }
    
    let lessPrice=prices[0]
    let lessIndex=0
    let greatPrice=prices[0]
    let greatIndex=0

    for(let i=0;i<prices.length;i++)
    {
        if(greatPrice<prices[i]){
            greatPrice=prices[i]
            greatIndex=i
        }
    }
    for(let i=0;i<prices.length;i++){
        if(lessPrice>prices[i] && i<greatIndex){
            lessPrice=prices[i]
            lessIndex=i
        }
    }


    if(lessIndex>=greatIndex)
        return 0
    else
        return greatPrice-lessPrice;


}
console.log("1,8,0,3,6,2 = ",price([1,8,0,3,6,2]))




    // let len=prices.length-1;
    // let greatPrice=prices[len]
    // let greatIndex=len
    
    // for(let i=0;i<prices.length;i++)
    //     {
    //         if(greatPrice<prices[len]){
    //             greatPrice=prices[len]
    //             greatIndex=len
    //         }
    //         if(lessPrice>prices[i] && i<greatIndex){
    //             lessPrice=prices[i]
    //             lessIndex=i      
    //         }
    //         len--;
    //     }
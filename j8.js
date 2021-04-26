function round(m){
    let res=0;
    for(let i=0;i<m.length;i++){
        if(m[i]%10==0){
            res=i;
       }
    }
    return res;
}
console.log(round([12,33,4,10]));
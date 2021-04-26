function ss(n,m){
let res=0;
for(let i=0;i<n.length;i++){
    for(let j=0;j<m.length;j++){
        if(n[i]==m[j]){
            res++;
        }
    }
}
return res;
}
console.log(ss([1,2,3,4],[12,3,4,5]));
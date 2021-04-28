function jj(str){
    if(str.length<4){
        return false;
    }
    f=str.substring(0,4);
    if(f=="java"){
        return true;
    }
    else{
        false;
    }
}
console.log(jj('jaddd'));
console.log(jj('javad'));
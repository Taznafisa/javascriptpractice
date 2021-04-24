function spath(main_path)
{
    var pats=main_path.split('/');
        npath=[];
        length=0;
        for(var i=0;i<pats.length;i++){
            var part=pats[i];
            if(part==='.' || part==='' || part==='..')
            {
                if(part==='..' && length>0){
                    length--;
                   
                }
                continue;
            }
           npath[length++]=part;
        }
        if(length===0){
            return '/';
        }

        var result='';
        for(i=0;i<length;i++){
            result+='/'+npath[i];
        }
        return result;
    
}

console.log(spath("/home/var/./www/../html//sql/"));
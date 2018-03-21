var a=function* add(){
 
    for(var i=0;i<=10;i++){
       yield console.log(i);

    }


}
a.next();


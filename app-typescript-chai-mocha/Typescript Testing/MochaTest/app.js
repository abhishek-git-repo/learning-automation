/*
---for a single function----
module.exports=function(){
    return 'Hello';
}

*/

/*
----for multiple functions in a single file---
*/

module.exports={
    sayHello:function(){
        return 'Hello';
    },
    addNumber:function(value1,value2){
        return value1+value2;
    }
}


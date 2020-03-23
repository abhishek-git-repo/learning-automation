
const assert=require('chai').assert;
/*
---in case of a single function----

const app=require('../app');
describe('App',function(){
    it('app should return hello',function(){
        assert.equal(app(),'Hello');
    })
})
*/


/*
----for multiple functions in a single file---
*/
const app=require('../app');
sayHelloResult=app.sayHello();
addNumberResult=app.addNumber(5,5);

describe('App',function(){
    describe('sayHello()',function(){
        it('app should return hello',function(){
            //let result=app.sayHello();
            assert.equal(sayHelloResult,'Hello');
        });
        it('sayHello() should return tye string',function(){
            //let result=app.sayHello();
            assert.typeOf(sayHelloResult,'string');
        });
    });

    describe('addNumber()',function(){
        it('addnumber() should be above 5',function(){
            //let result=app.addNumber(5,5);
            assert.isAbove(addNumberResult,5);
        });
        it('addNumber() should return type number',function(){
            //let result=app.addNumber();
            assert.typeOf(addNumberResult,'number');
        });
    })
})
    
    


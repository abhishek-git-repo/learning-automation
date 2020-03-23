import { expect, assert } from 'chai';
import 'mocha';
import { hello, addNumber } from '../src/app';

 
describe('First test', () => {
 
  it('should return Hello World', () => {
    const result = hello();
    expect(result).to.equal('Hello World');
  });
 
});


describe('App',function(){
    describe('hello()',function(){
        it('app should return hello',function(){
          let result=hello();
            expect(result).to.equal('Hello World');
           // assert.equal(result,'Hello World');
        });
        it('hello() should return tye string',function(){
            let result=hello();
            expect(result).to.be.a('string');
            //assert.typeOf(result,'string');
        });
    });

    describe('addNumber()',function(){
        it('addnumber() should be above 5',function(){
            let result=addNumber(5,5);
            expect(result).to.be.above(5);
            //assert.isAbove(result,5);
        it('addNumber() should return type number',function(){
          let result=addNumber(5,5);
            expect(result).to.be.a('number');
            //assert.typeOf(result,'number');
        });
    });
  });
});
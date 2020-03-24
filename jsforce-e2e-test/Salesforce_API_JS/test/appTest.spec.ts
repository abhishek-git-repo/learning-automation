import { expect, assert } from 'chai';
import 'mocha';

import { AccountCreation } from '../app';
import { spy } from 'sinon';


describe('createAccount()',function(){
    
    it('should create account and return record id',function(){
        const accountCreateInstance=new AccountCreation;
        const accountCreateSpy=spy(accountCreateInstance,'createAccount');
        accountCreateInstance.createAccount();

        expect(accountCreateSpy.calledOnce).to.be.true;
      
    });
});
const expect = require('chai').expect;
const Account = require('../lib/account');

describe('Account', function(){
  describe('constructor', function(){
    it('should create an account object', function(){
      const acct1 = new Account("Daniel", 100.00);
      expect(acct1).to.be.instanceof(Account);
      expect(acct1.name).to.equal("Daniel");
      expect(acct1.balance).to.equal(100);
      expect(acct1.number).to.be.length(36);
      expect(acct1.deposits).to.have.length(0);
      expect(acct1.withdraws).to.have.length(0);
    });
  });
});

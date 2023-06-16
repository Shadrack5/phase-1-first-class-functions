const chai = require('chai');
const spies = require('chai-spies');
chai.use(spies);

function receivesAFunction(callback) {
  callback();
}

const spy = chai.spy();

receivesAFunction(spy);

chai.expect(spy).to.have.been.called();

function returnsANamedFunction() {
  return function namedFunction() {
  };
}

const result = returnsANamedFunction();

chai.expect(result).to.be.a("function");
chai.expect(result.name).to.not.be.empty;
function returnsAnAnonymousFunction() {
    return function() {
    };
  }
  
  let fn;
  
  before(() => {
    fn = returnsAnAnonymousFunction();
  });
  
  it("returns a function", () => {
    expect(fn).to.be.a("function");
  });
  
  it("returns an anonymous function", () => {
    expect(fn.name).to.eql("");
  });
  
  
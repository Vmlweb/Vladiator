var assert = require('chai').should();
var validate = require('../vladiator.js');

describe('Numbers', function() {
	
	//! isNumber
	
	it('should fail when undefined is number', function () {
		
		var test = validate(undefined).isNumber();
		var test2 = validate(undefined).isNotNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when null is number', function () {
		
		var test = validate(null).isNumber();
		var test2 = validate(null).isNotNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when bool is number', function () {
		
		var test = validate(false).isNumber();
		var test2 = validate(false).isNotNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when string is number', function () {
		
		var test = validate("").isNumber();
		var test2 = validate("").isNotNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should pass when number is number', function () {
		
		var test = validate(5).isNumber();
		var test2 = validate(5).isNotNumber();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when array is number', function () {
		
		var test = validate([]).isNumber();
		var test2 = validate([]).isNotNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	it('should fail when object is number', function () {
		
		var test = validate({}).isNumber();
		var test2 = validate({}).isNotNumber();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
		test2.didPass().should.not.equal(expected);
		test2.didFail().should.equal(expected);
	});
	
	//! isPositive
	
	it('should fail when minus 5 is positive', function () {
		
		var test = validate(-5).isPositive();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when zero is positive', function () {
		
		var test = validate(0).isPositive();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should pass when plus 5 is positive', function () {
		
		var test = validate(5).isPositive();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	//! isNegative
	
	it('should pass when minus 5 is negative', function () {
		
		var test = validate(-5).isNegative();
		var expected = true;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should fail when zero is negative', function () {
		
		var test = validate(0).isNegative();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
	it('should fail when plus 5 is negative', function () {
		
		var test = validate(5).isNegative();
		var expected = false;
		
		test.didPass().should.equal(expected);
		test.didFail().should.not.equal(expected);
	});
	
});
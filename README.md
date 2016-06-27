# The Vladiator

[![Build Status](http://bamboo.vmlweb.co.uk:8085/plugins/servlet/wittified/build-status/OPEN-VLAD)](http://bamboo.vmlweb.co.uk:8085/browse/OPEN-VLAD)

Javascript validation and assertion library.

## Getting Started

```javascript
var validate = require('the-vladiator');

//E-mail address
validate('email@email.com').isRequired().isString().isEmail().didPass();

//Name
validate('John').isRequired().isString().notEmpty().didPass();

//Positive number
validate('5').isRequired().isNumber().isPositive().didPass();

//Array of positive numbers
validate([1, 2, 3, 4, 5]).isRequired().doExtract().isNumber().isPositive().didPass();

//Object key and values
validate({ name: 'John' }).isRequired().hasKey('name').didPass();
validate({ name: 'John' }).isRequired().hasKey('John').didPass();

//Nested object of strings
var obj = {
	nest: {
		nest3: 'test',
		nest4: 'test'
	},
	nest2: {
		test5: {
			test6: 'test'
		}
	}
};
validate(obj).isRequired().doExtract().doRecursive().isString().notEmpty().didPass();
```
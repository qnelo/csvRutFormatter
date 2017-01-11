import test from 'ava';
const csvClass = require('../lib/csv-class.js');

let csv = new csvClass('sii.csv');

test('Return array', t => {
    // Arrange & Act
    let result = csv.getArray();
    // Assert
    t.not(result, null);
    t.is(result instanceof Array, true);
});
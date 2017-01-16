import test from 'ava';
const csvClass = require('../lib/csv-class.js');

let csv = new csvClass('./test/sii.csv');

test.cb('Return instanceof Array & compare 0, 350400 positions', t => {
    // Arrange & Act
    csv.getArray((data) => {
        // Assert
        // console.log(JSON.stringify(data, null, 4));
        t.is(data[0], '50.534.620-3');
        t.is(data[350400], '76.365.580-6');
        t.is(data instanceof Array, true);
        t.end();
    });
});
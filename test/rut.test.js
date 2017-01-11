import test from 'ava';
const rut = require('../lib/rut-class.js');

let ruts = ['156491373', '9457904k'];
let rutTest = new rut(ruts);

test('Return rut formatter', t => {
    t.is(rutTest.format('156491373'), '15.649.137-3');
});

test('Return rut formatter with `-`', t => {
    t.is(rutTest.format('15649137-3'), '15.649.137-3');
});

test('Return rut formatter with `-` & `.`', t => {
    t.is(rutTest.format('15.649.137-3'), '15.649.137-3');
});

test('Return rut formatter with `---` & `...`', t => {
    t.is(rutTest.format('1.5.6.4.9.1.3-7-3'), '15.649.137-3');
});

test('Return array of formatted ruts position 0', t => {
    t.is(rutTest.formattedArray()[0], '15.649.137-3');
});

test('Return array of formatted ruts position 1', t => {
    t.is(rutTest.formattedArray()[1], '9.457.904-K');
});
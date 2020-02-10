const divide = require("../divide");
a =1;
b= 2;
c = divide(a,b);

test('divides 1 / 2 to equal 0.5', () => { expect(divide(a,b)).toBe(0.5)});
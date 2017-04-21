console.groupCollapsed('Stack Examples');
let stack = new Stack();
console.log(stack.isEmpty());//true

stack.push(5);
stack.push(8);

console.log(stack.peek());//8

stack.push(11);

console.log(stack.size());//3
console.log(stack.isEmpty());//false

stack.push(15);

stack.pop();
stack.pop();
console.log(stack.size());//2
stack.print();//[5,8]
console.groupEnd();

console.group('Stack Real Uses');
var converter = new NumberConverter();
console.log("10 to hex = %s", converter.toHex(10));
console.log("10 to oct = %s", converter.toOct(10));
console.log("10 to bin = %s", converter.toBin(10));
console.groupEnd();
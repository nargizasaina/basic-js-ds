const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
//  * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  root = [];

  push(element) {
    this.root.push(element);
  }

  pop() {
    return this.root.pop();
  }

  peek() {
    return this.root[this.root.length-1];
  }
}

const stack = new Stack();
console.log(stack.push(1)); // adds the element to the stack
console.log(stack.peek()); // returns the peek, but doesn't delete it, returns 1
console.log(stack.pop()); // returns the top element from stack and deletes it, returns 1
console.log(stack.pop());

module.exports = {
  Stack
};

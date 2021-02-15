/* ===== 1. Create a stack class =====
Walk through the Stack class in the curriculum and understand it well. Then write a Stack class with its core functions (push, pop) from scratch.
Create a stack called starTrek and add Kirk, Spock, McCoy, and Scotty to the stack.
*/
class _Node {
    constructor(data, next) {
        this.data = data
        this.next = next
    }
}
class Stack {
    constructor() {
        this.top = null
    }
    push(data) {
        if(this.top === null) {
            this.top = new _Node(data, null)
            return this.top
        }
        const node = new _Node(data, this.top)
        this.top = node
    }
    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }
}
const starTrek = new Stack()
starTrek.push('Kirk')
starTrek.push('Spock')
starTrek.push('McCoy')
starTrek.push('Scotty')

/* ===== 2. Useful methods for a stack =====
Using the Stack class above, implement the following helper functions outside of the class:
*/
//peek(): allows you to look at the top of the stack without removing it
function peek(stack) {
    if(!stack.top) {
        return null
    }
    const top = stack.top
    console.log(top.data)
    return top
}
peek(starTrek)//output: 'Scotty'
//isEmpty(): allows you to check if the stack is empty or not
function isEmpty(stack) {
    if(stack.top === null) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}
isEmpty(starTrek)//output: false
//display(): to display the stack - what is the 1st item in your stack?
function display(stack) {
    if(stack.top === null) {
        console.log('empty list')
        return 'empty list'
    }
    let results = ''
    let currNode = stack.top
    while(currNode !== null) {
        results = results + `${currNode.data}, `
        currNode = currNode.next
    }
    console.log(results)
    return results
}
display(starTrek)//output: Scotty, McCoy, Spock, Kirk
//Remove McCoy from your stack and display the stack
starTrek.pop()
starTrek.pop()
display(starTrek)//output: Spock, Kirk

/* ===== 3. Check for palindromes using a stack =====
Write an algorithm that uses a stack to determine whether a given input is palindrome or not.
*/
function is_palindrome(s) {
    s = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    // Your code goes here
    for(let i = 0; i < s.length/2; i++) {
        if(s[i] !== s[s.length - 1 - i]) {
            return false
        } 
    }
    return true
}
console.log(is_palindrome("dad"))//output: true
console.log(is_palindrome("A man, a plan, a canal: Panama"))//output: true
console.log(is_palindrome("1001"))//output: true
console.log(is_palindrome("Tauhida"))//output: false

/* ===== 4. Matching parenthesis in an expression =====
A stack can be used to ensure that an arithmetic expression has balanced parentheses. Write a function that takes an arithmetic expression as an argument and returns true or false based on matching parenthesis. As a bonus provide a meaningful error message to the user as to what's missing. For example, you are missing a ( or missing a ")".

For version 1, the parentheses you need to consider are ( and ). Finding a close parenthesis without an open parenthesis is an error (report the location of the close); reaching the end of the string while still "holding" an open parenthesis is also an error (report the location of the open).
*/
function matchingParenthesis(expression) {
    const stack = new Stack()
    let e = expression.replace(/\s+/g, '')
    if(!e) {
        return null
    }
    for(let i = 0; i < e.length; i++) {
        if(e[i] === '(') {
            stack.push('(')
        }
        if(e[i] === ')') {
            if(isEmpty(stack)) {
                console.log('you are missing a "("')
                return false
            }
            stack.pop()
        }
    }
    if(!isEmpty(stack)) {
        console.log('you are missing a ")"')
        return false
    }
    console.log('everything looks good!')
    return true
}
matchingParenthesis('( 4 X 5 ')//output: 'you are missing a ")"'

/* ===== 5. Sort stack ===== 
Write a program to sort a stack such that the smallest items are on the top (in ascending order). You can use an additional stack, but you may not use any other data structure (such as an array, or linked list).
*/
function sort(stack) {
    let sorted = new Stack()
    while(stack.top) {
        let temp = stack.pop()
        while(sorted.top && sorted.top.data < temp) {
            stack.push(sorted.pop())
        }
        sorted.push(temp)
    }
    display(sorted)
    return sorted
}
const s = new Stack();
s.push(4);
s.push(10);
s.push(8);
s.push(5);
s.push(1);
s.push(6);
sort(s)//output: 1, 4, 5, 6, 8, 10, 
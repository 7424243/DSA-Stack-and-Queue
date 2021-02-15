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
        results = results + ` ${currNode.data}`
        currNode = currNode.next
    }
    console.log(results)
    return results
}
display(starTrek)//output: Scotty, McCoy, Spock, Kirk
//Remove McCoy from your stack and display the stack
starTrek.pop()
starTrek.pop()
display(starTrek)
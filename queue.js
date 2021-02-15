/* ====== 6. Create a queue using Singly linked list =====
Walk through the Queue class in the curriculum and understand it well. Then write a Queue class with its core functions (enqueue(), dequeue()) from scratch.
Create a queue called starTrekQ and add Kirk, Spock, Uhura, Sulu, and Checkov to the queue.
*/
class _Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor() {
        this.first = null
        this.last = null
    }
    enqueue(data) {
        const node = new _Node(data)
        if(this.first === null) {
            this.first = node
        }
        if(this.last) {
            this.last.next = node
        }
        this.last = node
    }
    dequeue() {
        if(this.first === null) {
            return
        }
        const node = this.first
        this.first = this.first.next
        if(node === this.last) {
            this.last = null
        }
        return node.value
    }
}
let starTreckQ = new Queue()
starTreckQ.enqueue('Kirk')
starTreckQ.enqueue('Spock')
starTreckQ.enqueue('Uhura')
starTreckQ.enqueue('Sulu')
starTreckQ.enqueue('Checkov')
//Implement a peek() function outside of the Queue class that lets you take a peek at what the 1st item in the queue is.
function peek(queue) {
    if(!queue.first) {
        return null
    }
    const first = queue.first
    console.log(first.value)
    return first
}
peek(starTreckQ)//output: Kirk
//Implement a isEmpty() function outside the Queue class that allows you to check if the queue is empty or not
function isEmpty(queue) {
    if(queue.first) {
        console.log('false')
        return false
    } else {
        console.log('true')
        return true
    }
}
isEmpty(starTreckQ)//output: false
// Implement a display() function outside of the Queue class that lets you display what's in the queue.
function display(queue) {
    if(!queue.first) {
        console.log('empty queue')
        return 'empty queue'
    }
    let results = ''
    let currNode = queue.first
    while(currNode !== null) {
        results = results + `${currNode.value}, `
        currNode = currNode.next
    }
    console.log(results)
    return results
}
display(starTreckQ)//output: Kirk, Spock, Uhura, Sulu, Checkov, 
//Remove Spock from the queue and display the resulting queue.
starTreckQ.dequeue()//need to remove 'Kirk' in order to get to 'Spock'
starTreckQ.dequeue()
starTreckQ.enqueue('Kirk')
display(starTreckQ)//output: Uhura, Sulu, Checkov, Kirk, 
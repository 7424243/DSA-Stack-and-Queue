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

/* ===== 7. Create a queue class using Doubly linked list =====
Use the items listed in #6 and enqueue them to your queue.
Check to see who is first one on the Queue?
*/
class _NodeD {
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}
class DoubleQueue {
    constructor() {
        this.first = null
        this.last = null
    }
    enqueue(value) {
        let node = new _NodeD(value)
        if(!this.first) {
            this.first = node
            this.last = node
            return this.first.value
        }
        if(this.last) {
            let lastitem = this.last
            this.last = node
            this.last.prev = lastitem
            lastitem.next = this.last
            return this.last.value
        }
    }
    dequeue() {
        if(!this.first) {
            return 'Your queue is empty'
        }
        let oldFirst = this.first
        let newFirst = this.first.next
        this.first = newFirst
        newFirst.prev = null
        return oldFirst.value
    }
}
let starTreckDQ = new DoubleQueue()
starTreckDQ.enqueue('Kirk')
starTreckDQ.enqueue('Spock')
starTreckDQ.enqueue('Uhara')
starTreckDQ.enqueue('Sulu')
starTreckDQ.enqueue('Checkov')
console.log(starTreckDQ)

/* ===== 8. Queue implementations using a stack =====
Implement a queue using 2 stacks and no other data structure. (You are not allowed to use a doubly linked list or array. Use your stack implementation with a linked list from above to solve this problem.)
*/
class _QNode {
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
            this.top = new _QNode(data, null)
            return this.top
        }
        const node = new _QNode(data, this.top)
        this.top = node
    }
    pop() {
        const node = this.top
        this.top = node.next
        return node.data
    }
}
class QueueWStacks {
    constructor() {
        this.stack1 = new Stack()
        this.stack2 = new Stack()
    }
    enqueue(item) {
        this.stack1.push(item)
    }
    dequeue() {
        if(!this.stack2.top) {
            if(!this.stack1.top) {
                return 'There is nothing to dequeue'
            }
            while(this.stack1.top) {
                let p = this.stack1.pop()
                this.stack2.push(p)
            }
        }
        return this.stack2.pop()
    }
}
const queueWithStacks = new QueueWStacks()
queueWithStacks.enqueue(2)
queueWithStacks.enqueue(3)
queueWithStacks.enqueue(4)

/* ===== 9. Square dance pairing =====
As people come to the dance floor, they should be paired off as quickly as possible: man with woman, man with woman, all the way down the line. If several men arrive in a row, they should be paired in the order they came, and likewise if several women do. Maintain a queue of "spares" (men for whom you have no women yet, or vice versa), and pair them as appropriate.
*/
const fQueue = new Queue()
const mQueue = new Queue()
function pairDancers(dancers) {
    dancers.forEach(dancer => {
        if(dancer[0] === 'F') {
            fQueue.enqueue(dancer)
        }
        if(dancer[0] === 'M') {
            mQueue.enqueue(dancer)
        }
        if(fQueue.first && mQueue.first) {
            let male = mQueue.dequeue()
            let female = fQueue.dequeue()
            console.log(`${male} is paired with ${female}`)
        }
    })
    if(fQueue.first) {
        let count = 1
        let currNode = fQueue.first
        while(currNode.next !== null) {
            count++
            currNode = currNode.next
        }
        console.log(`There are ${count} female dancers waiting to dance`)
    }
    if(mQueue.first) {
        let count = 1
        let currNode = mQueue.first
        while(currNode.next !== null) {
            count++
            currNode = currNode.next
        }
        console.log(`There are ${count} male dancers waiting to dance`)
    }
}
pairDancers(['F Jane', 'M Frank', 'M John', 'M Sherlock', 'F Madonna', 'M David', 'M Christopher', 'F Beyonce'])
//output: 
//M Frank is paired with F Jane
// M John is paired with F Madonna
// M Sherlock is paired with F Beyonce
// There are 2 male dancers waiting to dance

/* ===== 10. The Ophidian Bank =====
At the Ophidian Bank, a single teller serves a long queue of people. New customers join the end of the queue, and the teller will serve a customer only if they have all of the appropriate paperwork. Write a representation of this queue; 25% of the time (random), a customer's paperwork isn't quite right, and it's back to the end of the queue. Show what a few minutes of the bank's lobby would look like.
*/
function orphidianBank(queue) {
    while(queue.first) {
        let person = queue.first.data
        let random = Math.randon()
        if(random < .25) {
            queue.enqueue(person)
            console.log(`${person}'s paperwork isn't complete - moved back to the end of the queue`)
        } else {
            console.log(`${person} has been served`)
        }
    }
    console.log(`Everyone has been served.`)
}
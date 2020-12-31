// piece of data - val
//reference to next node - next

class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val){
        var newNode = new Node(val);
        if(!this.head){
            this.head = newNode
            this.tail = this.head
        } else {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head){
            return undefined
        }
        let current = this.head
        let newTail = current
        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return current
    }
    shift(){
        if(!this.head){
            return undefined
        }
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }
    unshift(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        }
        else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length){
            return null
        }
        let counter = 0
        let currentHead = this.head
        while (counter < index) {
            currentHead = currentHead.next
            counter++
        }
        return currentHead
    }
    set(index, val){
        let node = this.get(index)
        if(!node){
            return false
        }
        node.val  = val
        return true 
    }
    insert(index, val){
        if(index < 0 || index > this.length){
            return false
        }
        else if(index === this.length){
            !!this.push(val)
        }
        else if(index === 0){
            !!this.unshift(val)  
        }
        else{
            let prevNode = this.get(index-1)
            let nextNode = prevNode.next
            let newNode = new Node(val)
            prevNode.next = newNode
            newNode.next = nextNode
            this.length++
            return true
        }
    }
    remove(index){
        if(index < 0 || index >= this.length){
            return undefined
        }
        else if(index === 0){
            return this.shift()
        }
        else if(index === this.length - 1){
            return this.pop()
        }
        else{
            let prevNode = this.get(index-1)
            let removed = prevNode.next
            prevNode.next = removed.next
            this.length--
            return removed
        }
    }
}
 
var list = new SinglyLinkedList()
list.push("HELLO")
list.push("GOODBYE")
list.push("all")

list.remove(1)

// list.insert(2, "Noon")
// console.log("get",list.get(0))
console.dir(list, {depth: null})




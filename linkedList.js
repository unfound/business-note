class LinkedList {
    constructor (data) {
        this.head = new LinkedNode(data)
        this.last = this.head
    }

    add (data) {
        const newNode = new LinkedNode(data)
        this.last.next = newNode
        this.last = newNode
    }

    includes (data) {
        let curr = this.head
        while (curr) {
            if (curr.data === data) {
                return true
            }
            curr = curr.next
        }
        return false
    }

    delete (data) {
        let curr = this.head
        let lastNode = null
        while (curr) {
            if (curr.data === data) {
                if (lastNode) {
                    lastNode.next = curr.next
                    curr.next = null
                    return true
                }
            }
            lastNode = curr
            curr = curr.next
        }
        return false
    }

    insertAfter (data) {
        let curr = this.head
        while (curr) {
            if (curr.data === data) {
                const newNode = new LinkedNode(data)
                newNode.next = curr.next
                curr.next = newNode
                return true
            }
            curr = curr.next
        }
        return false
    }

    insertbefore () {}
}

class LinkedNode {
    constructor (data) {
        this.data = data
        this.next = null
    }
}
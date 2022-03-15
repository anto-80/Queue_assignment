class Queue {
	constructor() {
	  this.items = {};
	  this.head = 0;
	  this.size = 0;
	}
	enqueue(item) {
	  this.items[this.size] = item;
	  this.size++;
	}
	dequeue() {
	  const item = this.items[this.head];
	  delete this.items[this.head];
	  this.head++;
	  return item;
	}
	peek() {
	  return this.items[this.head];
	}
	get length() {
	  return this.size - this.head;
	}
  }
  const queue = new Queue();
  queue.enqueue();
  queue.enqueue();
  queue.enqueue();
  queue.enqueue();
  queue.dequeue(); // => 7
  queue.peek();    // => 2
  queue.length;    // => 3



module.exports = Queue


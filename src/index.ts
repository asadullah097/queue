import { Queue } from "./queue";

const queue = new Queue()

console.log(queue);

queue.enQueue(2)

queue.enQueue(3)

console.log(queue.size(), queue.peek(), queue.printQueue());


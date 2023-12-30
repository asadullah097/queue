export class Queue {

  private items: any
  private head: number
  private tail: number

  constructor() {
    this.items = [];
    this.head = 0
    this.tail = 0
  }

  enQueue(item: any) {
    this.items[this.tail] = item
    this.tail++
  }

  deQueue(): any {
    if (this.isEmpty()) {
      return "Empty";
    }

    const firstItem = this.peek()

    delete this.items[this.head]

    this.head++

    return firstItem
  }

  peek(): any {
    return this.items[this.head]
  }

  size(): number {
    return this.tail - this.head;
  }

  isEmpty(): boolean {
    return this.items.length == 0;
  }

  clear() {
    this.items = {}

    this.head = 0

    this.tail = 0

  }
  printQueue() {
    let result: any = "";
    for (let i = 0; i < this.items.length; i++) {
      const element = this.items[i];
      result += element + " ";
    }
    return result;
  }
}


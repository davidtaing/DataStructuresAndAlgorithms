class Stack<T> {
  top = 0;
  items: Array<T> = new Array<T>();

  constructor(initialItems: Array<T> = []) {
    this.items = initialItems;
  }

  empty() {
    if (this.top === 0) return true;

    return false;
  }

  push(item: T) {
    this.top += 1;
    this.items[this.top] = item;
  }

  pop() {
    if (this.empty()) {
      throw Error("Stack Underflow");
    } else {
      this.top -= 1;
      return this.items[this.top + 1];
    }
  }
}

export default Stack;

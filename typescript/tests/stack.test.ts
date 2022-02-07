import Stack from "../stack";

describe("Stack<String>", () => {
  describe("Stack.empty with empty stack", () => {
    let stack: Stack<string>;
    stack = new Stack<string>();

    test("Equals true", () => {
      expect(stack.empty()).toEqual(true);
    });
  });

  describe("Stack.push adds Hello to Stack", () => {
    let stack: Stack<string>;
    stack = new Stack<string>();
    stack.push("Hello");

    test("stack.top is now 1", () => {
      expect(stack.top === 1);
    });

    test("'Hello' is in stack", () => {
      expect(stack.items[0] === "Hello");
    });
  });

  describe("Stack.pop with empty stack", () => {
    let stack: Stack<string>;
    stack = new Stack<string>();

    test("throws 'Stack Underflow' error", () => {
      expect(() => stack.pop()).toThrowError("Stack Underflow");
    });
  });

  describe("Stack.pop with empty stack", () => {
    let stack: Stack<string>;
    stack = new Stack<string>();
    stack.push("Hello");

    test("returns 'Hello'", () => {
      expect(stack.pop()).toStrictEqual("Hello");
    });
  });
});

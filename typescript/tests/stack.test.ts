import Stack from "../stack";

describe("Stack<String>", () => {
  let stack: Stack<string>;

  beforeAll(() => {
    stack = new Stack<string>();
  });

  test("Stack.empty", () => {
    expect(stack.empty()).toEqual(true);
  });
});

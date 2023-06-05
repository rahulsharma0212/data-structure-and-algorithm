import LinkedList from "../linkedList";

describe("LinkedList", () => {
  it("should create empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.isEmpty()).toBeTruthy();
  });
});

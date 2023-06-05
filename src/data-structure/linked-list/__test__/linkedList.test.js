import LinkedList from "../linkedList";

describe("LinkedList", () => {
  it("should create empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.isEmpty()).toBeTruthy();
    expect(linkedList.size()).toBe(0);
    expect(linkedList.toArray()).toEqual([]);
    expect(linkedList.toString()).toEqual("");
  });

  it("should push data to linked list", () => {
    const linkedList = new LinkedList();
    linkedList.push(2);
    linkedList.push(3);
    expect(linkedList.length).toBe(2);
    expect(linkedList.toArray()).toEqual([2, 3]); /*matching with order */
    expect(linkedList.toArray()).toEqual(
      expect.arrayContaining([3, 2])
    ); /*matching with regardles of order */
    expect(linkedList.toString()).toEqual("2,3");
  });
});

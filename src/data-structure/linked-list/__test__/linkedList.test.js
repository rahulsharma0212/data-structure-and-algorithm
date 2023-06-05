import LinkedList from "../linkedList";

describe("LinkedList", () => {
  it("ISEMPTY || should create empty linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.isEmpty()).toBeTruthy();
    expect(linkedList.size()).toBe(0);
    expect(linkedList.toArray()).toEqual([]);
    expect(linkedList.toString()).toEqual("");
  });

  it("PUSH || should push data from the end of linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.push(2)).toBe(2);
    expect(linkedList.push(3)).toBe(3);
    expect(linkedList.length).toBe(2);
    expect(linkedList.toArray()).toEqual([2, 3]); /*matching with order */
    expect(linkedList.toArray()).toEqual(
      expect.arrayContaining([3, 2])
    ); /*matching with regardles of order */
    expect(linkedList.toString()).toEqual("2,3");
  });

  it("UNSHIFT || should push data from start of linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.unshift(2)).toBe(2);
    expect(linkedList.unshift(3)).toBe(3);
    expect(linkedList.length).toBe(2);
    expect(linkedList.toArray()).toEqual([3, 2]); /*matching with order */
    expect(linkedList.toArray()).toEqual(
      expect.arrayContaining([2, 3])
    ); /*matching with regardles of order */
    expect(linkedList.toString()).toEqual("3,2");
  });

  it("POP || should remove data from the end of linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.pop()).toBeUndefined();
    expect(linkedList.push(1)).toBe(1);
    expect(linkedList.push(2)).toBe(2);
    expect(linkedList.pop()).toBe(2);
    expect(linkedList.toString()).toBe("1");
    expect(linkedList.toArray()).toEqual([1]);
    expect(linkedList.pop()).toBe(1);
    expect(linkedList.toString()).toBe("");
    expect(linkedList.toArray()).toEqual([]);
    expect(linkedList.isEmpty()).toBeTruthy();
  });

  it("SHIFT || should remove data from start of linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.shift()).toBeUndefined();
    expect(linkedList.push(1)).toBe(1);
    expect(linkedList.push(2)).toBe(2);
    expect(linkedList.shift()).toBe(1);
    expect(linkedList.toString()).toBe("2");
    expect(linkedList.toArray()).toEqual([2]);
    expect(linkedList.shift()).toBe(2);
    expect(linkedList.toString()).toBe("");
    expect(linkedList.toArray()).toEqual([]);
    expect(linkedList.isEmpty()).toBeTruthy();
  });

  it("GET || should get data at a particular index of linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.push(1)).toBe(1);
    expect(linkedList.push(2)).toBe(2);

    expect(linkedList.get(-1)).toBeUndefined();
    expect(linkedList.get(5)).toBeUndefined();

    expect(linkedList.get(0)).toBe(1);
    expect(linkedList.get(1)).toBe(2);
  });

  it("SET || should get data at a particular index of linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.push(1)).toBe(1);
    expect(linkedList.push(2)).toBe(2);

    expect(linkedList.set(-1, 3)).toBeUndefined();
    expect(linkedList.set(5, 4)).toBeUndefined();

    expect(linkedList.set(0, 3)).toBe(3);
    expect(linkedList.set(1, 4)).toBe(4);
    expect(linkedList.toString()).toBe("3,4");
  });

  it("INSERT || should insert data at a particular index of linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.push(2)).toBe(2);
    expect(linkedList.push(4)).toBe(4);

    expect(linkedList.insert(-1, 3)).toBeUndefined();
    expect(linkedList.insert(5, 4)).toBeUndefined();

    expect(linkedList.insert(0, 1)).toBe(1);
    expect(linkedList.insert(3, 5)).toBe(5);
    expect(linkedList.insert(2, 3)).toBe(3);

    expect(linkedList.toString()).toBe("1,2,3,4,5");
  });

  it("REMOVE || should remove data at a particular index of linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.push(1)).toBe(1);
    expect(linkedList.push(2)).toBe(2);
    expect(linkedList.push(3)).toBe(3);
    expect(linkedList.push(4)).toBe(4);
    expect(linkedList.push(5)).toBe(5);

    expect(linkedList.remove(-1)).toBeUndefined();
    expect(linkedList.remove(5)).toBeUndefined();

    expect(linkedList.remove(0)).toBe(1);
    expect(linkedList.remove(3)).toBe(5);
    expect(linkedList.remove(1)).toBe(3);

    expect(linkedList.toString()).toBe("2,4");
  });

  it("INDEXOF || should get index for particular value inside linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.push(1)).toBe(1);
    expect(linkedList.push(2)).toBe(2);
    expect(linkedList.push(3)).toBe(3);
    expect(linkedList.push(4)).toBe(4);
    expect(linkedList.push(5)).toBe(5);

    expect(linkedList.indexOf(8)).toBe(-1);
    expect(linkedList.indexOf(2)).toBe(1);
    expect(linkedList.indexOf(4)).toBe(3);
  });

  it("INCLUDES || should give boolean(T|F) for particular value inside linked list", () => {
    const linkedList = new LinkedList();
    expect(linkedList.push(1)).toBe(1);
    expect(linkedList.push(2)).toBe(2);
    expect(linkedList.push(3)).toBe(3);
    expect(linkedList.push(4)).toBe(4);
    expect(linkedList.push(5)).toBe(5);

    expect(linkedList.includes(8)).toBeFalsy();
    expect(linkedList.includes(2)).toBeTruthy();
  });

  it("FROMARRAY || should give boolean(T|F) for particular value inside linked list", () => {
    const linkedList = new LinkedList();
    const llFromArray = linkedList.fromArray([1, 2, 3, 4, 5]);
    expect(llFromArray).toBeInstanceOf(LinkedList);
    expect(llFromArray.toString()).toBe("1,2,3,4,5");
  });
});

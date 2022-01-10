import assert from 'assert';
import { Counter } from '../counter';

describe("Counter", () => {
  const DEFAULT_ELEMENT = "DEFAULT_ELEMENT";
  const MAX_TIMES = 5;

  it("should be created as an empty object", () => {
    const counter = new Counter();
    assert.deepStrictEqual(counter.dictionary, {});
  });

  it("should get 0 times if we ask for an element not added yet", () => {
    const counter = new Counter();
    assert.strictEqual(counter.getTimes(DEFAULT_ELEMENT), 0);
  });

  it("should count the times an element is added to the list", () => {
    const counter = new Counter();
    counter.add(DEFAULT_ELEMENT);
    assert.strictEqual(counter.getTimes(DEFAULT_ELEMENT), 1);
    counter.add(DEFAULT_ELEMENT);
    counter.add(DEFAULT_ELEMENT);
    assert.strictEqual(counter.getTimes(DEFAULT_ELEMENT), 3);
  });

  it("should count the times an element is removed from the list", () => {
    const counter = new Counter();
    counter.add(DEFAULT_ELEMENT);
    counter.add(DEFAULT_ELEMENT);
    counter.add(DEFAULT_ELEMENT);
    assert.strictEqual(counter.getTimes(DEFAULT_ELEMENT), 3);
    counter.remove(DEFAULT_ELEMENT);
    assert.strictEqual(counter.getTimes(DEFAULT_ELEMENT), 2);
    counter.remove(DEFAULT_ELEMENT);
    counter.remove(DEFAULT_ELEMENT);
    assert.strictEqual(counter.getTimes(DEFAULT_ELEMENT), 0);
  });

  it("should validate an element if it is not repeated N times", () => {
    const counter = new Counter(MAX_TIMES);
    counter.add(DEFAULT_ELEMENT);
    counter.add(DEFAULT_ELEMENT);
    assert.strictEqual(counter.isValid(DEFAULT_ELEMENT), true);
    counter.add(DEFAULT_ELEMENT);
    counter.add(DEFAULT_ELEMENT);
    counter.add(DEFAULT_ELEMENT);
    assert.strictEqual(counter.isValid(DEFAULT_ELEMENT), false);
    counter.remove(DEFAULT_ELEMENT);
    assert.strictEqual(counter.isValid(DEFAULT_ELEMENT), true);
  });
});
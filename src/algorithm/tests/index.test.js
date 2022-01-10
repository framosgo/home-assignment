import assert from 'assert';
import { applyAlgorithm } from '..';
import { IP_MAX_TIMES } from '../../constants';

describe("Algorithm", () => {
  const DEFAULT_AMOUNT = 10;
  const DEFAULT_PERIOD = 6;
  const createIP = (i = 1) => `${i}${i}.${i}${i}.${i}${i}.${i}${i}`;

  it("should return a empty array as solution given no data", () => {
    assert.strictEqual(applyAlgorithm().length, 0);
    assert.strictEqual(applyAlgorithm([]).length, 0);
  });


  it("should only record the most expensive click in the same period. Requirement 1.", () => {
    const clicks = Array.from({ length: 10 }, (_, i) => (
      { ip: createIP(i), timestamp: new Date().toLocaleString(), amount: i }
    ));
    const shuffledClicks = [...clicks].sort(() => Math.random() - Math.random());
    const subset = applyAlgorithm(shuffledClicks);
    assert.strictEqual(subset.length, 1);
    assert.strictEqual(subset[subset.length - 1].ip, clicks[clicks.length - 1].ip);
  })

  it("should only record the earliest click with the same amount and period. Requirement 2.", () => {
    const clicks = Array.from({ length: 10 }, (_, i) => ({
      ip: createIP(i),
      timestamp: new Date(new Date().setHours(DEFAULT_PERIOD, i)).toLocaleString(),
      amount: DEFAULT_AMOUNT
    }));
    const shuffledClicks = [...clicks].sort(() => Math.random() - Math.random());
    const subset = applyAlgorithm(shuffledClicks);
    assert.strictEqual(subset.length, 1);
    assert.strictEqual(subset[0].ip, clicks[0].ip);
  })

  it(`should Not repeat IPs more than ${IP_MAX_TIMES} times. Requirement 3.`, () => {
    const repeteadClicks = Array.from({ length: 20 }, (_, i) => (
      {
        ip: createIP(),
        timestamp: new Date(new Date().setHours(i)).toLocaleString(),
        amount: i,
      }
    ));
    const subset = applyAlgorithm(repeteadClicks);
    assert.strictEqual(subset.length, IP_MAX_TIMES);
  });
});
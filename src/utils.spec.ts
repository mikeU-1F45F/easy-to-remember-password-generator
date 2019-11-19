import { Utils } from './utils';

describe('Utils', () => {
  it('produces a random positive integer >= 0', () => {
    const largestPossibleInteger: number = 17;
    const selectedRandomInteger: number = Utils.random0OrGreaterInteger(
      largestPossibleInteger,
    );

    expect(selectedRandomInteger).toBeGreaterThanOrEqual(0);
    expect(selectedRandomInteger).toBeLessThanOrEqual(largestPossibleInteger);
  });
});

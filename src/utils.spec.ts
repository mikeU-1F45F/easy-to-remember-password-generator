import { Utils } from './utils';

describe('Utils', () => {
  it('produces a random positive integer >= 0', () => {
    const utils = new Utils();
    const largestPossibleInteger: number = 17;
    const selectedRandomInteger: number = utils.random0OrGreaterInteger(largestPossibleInteger);

    expect(selectedRandomInteger).toBeGreaterThanOrEqual(0);
    expect(selectedRandomInteger).toBeLessThanOrEqual(largestPossibleInteger);
  });
});

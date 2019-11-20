import { Utils } from './utils';

describe('Utils', () => {
  it('produces a random integer between a minimum and maximum', () => {
    const smallestPossibleInteger: number = 0;
    const largestPossibleInteger: number = 17;
    const selectedRandomInteger: number = Utils.randomInteger(
      smallestPossibleInteger,
      largestPossibleInteger,
    );

    expect(selectedRandomInteger).toBeGreaterThanOrEqual(
      smallestPossibleInteger,
    );
    expect(selectedRandomInteger).toBeLessThanOrEqual(largestPossibleInteger);
  });
});

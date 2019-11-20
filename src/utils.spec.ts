import { Utils } from './utils';

describe('Utils', () => {
  describe('for numbers', () => {
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

  describe('for words', () => {
    it('produces a title-case version of a word', () => {
      const titleCaseVersion: string = Utils.titleCase('bananas');

      expect(titleCaseVersion).toEqual('Bananas');
    });

    it('throws an error when you try to provide multiple words', () => {
      expect(Utils.titleCase('happy shoes')).toThrowError();
    });
  });
});

import { WordList } from './wordList';

describe('WordList', () => {
  it('contains more than 1500 words', () => {
    const wordCount = new WordList().words.length;

    expect(wordCount).toBeGreaterThan(1500);
  });
});
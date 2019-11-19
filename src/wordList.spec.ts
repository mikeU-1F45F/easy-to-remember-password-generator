import { WordList } from './wordList';

describe('WordList', () => {
  it('contains more than 1500 words', () => {
    const wordCount = new WordList().words.length;

    expect(wordCount).toBeGreaterThan(1500);
  });

  it('produces a random index within the length of the wordlist', () => {
    const wordList = new WordList();
    const randomIndex = wordList.randomIndex();

    expect(randomIndex).toBeGreaterThanOrEqual(0);
    expect(randomIndex).toBeLessThanOrEqual(wordList.words.length);
  });

  it('selects and returns a word at random', () => {
    const wordList = new WordList();
    const selectedWord = wordList.randomWord();

    expect(wordList.words).toContain(selectedWord);
  });
});

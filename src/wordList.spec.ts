import { WordList } from './wordList';

describe('WordList', () => {
  it('contains more than 1500 words', () => {
    const wordCount = new WordList().words.length;

    expect(wordCount).toBeGreaterThan(1500);
  });

  it('selects and returns a word at random', () => {
    const wordList = new WordList();
    const selectedWord = wordList.randomWord();

    expect(wordList.words).toContain(selectedWord);
  });
});

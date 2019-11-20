import { Utils } from './utils';
import { WordList } from './wordList';

export class E2rpg {
  public generatePassword(): string {
    const numberComponent: number = Utils.randomInteger(10, 99);

    const wordList: WordList = new WordList();

    const selectedWords: string[] = [];
    while (selectedWords.join('').length < 15) {
      selectedWords.push(Utils.titleCase(wordList.randomWord()));
    }

    selectedWords.push(numberComponent.toString());

    const passphrase = this.shuffle(selectedWords).join('-');

    return passphrase;
  }

  // https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle#Fisher_and_Yates'_original_method
  private shuffle(array: string[]): string[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * i);
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }
}

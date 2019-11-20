export class Utils {
  public static titleCase(wordToTitleCase: string): string {
    if (wordToTitleCase.indexOf(' ') >= 0) {
      throw new Error('Function operates on single word');
    }
    return (
      wordToTitleCase.charAt(0).toUpperCase() +
      wordToTitleCase.substr(1).toLowerCase()
    );
  }

  public static randomInteger(
    smallestPossibleInteger: number,
    largestPossibleInteger: number,
  ): number {
    const min: number = Math.floor(smallestPossibleInteger);
    const max: number = Math.floor(largestPossibleInteger);

    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }
}

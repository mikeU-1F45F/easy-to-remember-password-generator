export class Utils {
  public static randomInteger(
    smallestPossibleInteger: number,
    largestPossibleInteger: number,
  ): number {
    const min: number = 0;
    const max: number = Math.floor(largestPossibleInteger);

    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }
}

export class Utils {
  public random0OrGreaterInteger(largestPossibleInteger: number): number {
    const min: number = 0;
    const max: number = Math.floor(largestPossibleInteger);

    return Math.floor(Math.random() * (max - min)) + min; // The maximum is exclusive and the minimum is inclusive
  }
}

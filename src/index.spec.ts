import { E2rpg } from './index';

describe('The Generator generates a password that', () => {
  let passphraseUnderTest: string;
  beforeAll(() => {
    const generator: E2rpg = new E2rpg();
    passphraseUnderTest = generator.generatePassword();
  });

  it('is longer than 15 characters', () => {
    expect(passphraseUnderTest.length).toBeGreaterThanOrEqual(15);
  });

  it('contains 2-digit number', () => {
    expect(passphraseUnderTest.match(/[0-9]{2}/)).toBeTruthy();
  });

  it('contains commonly accepted & memorable symbols', () => {
    expect(passphraseUnderTest.match(/[\._\-]/)).toBeTruthy();
  });

  it('contains uppercase characters', () => {
    expect(passphraseUnderTest.match(/[A-Z]/)).toBeTruthy();
  });

  it('contains lowercase characters', () => {
    expect(passphraseUnderTest.match(/[a-z]/)).toBeTruthy();
  });
});

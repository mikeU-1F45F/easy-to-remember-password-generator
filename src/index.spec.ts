import { E2rpg } from './index';

describe('The Generator', () => {
  it('should have a friendly welcome message', () => {
    const testMessage = 'Hello E2RPG. :-)';

    const message = new E2rpg(testMessage).message;

    expect(message).toEqual(testMessage);
  });
});

import { getRandomNumberInRange } from "../lib/randoms";

describe('getRandomNumberInRange', () => {
  let randomNumber;
  beforeEach(() => {
    randomNumber = 0
  });

  it('returns a number within the range given', () => {
    randomNumber = getRandomNumberInRange(1, 5);
    const firstResult = (randomNumber >= 1) && (randomNumber <= 5);
    expect(firstResult).toBe(true);

    randomNumber = getRandomNumberInRange(10, 500);
    const secondResult = (randomNumber >= 10) && (randomNumber <= 500);
    expect(secondResult).toBe(true);
  });
});

describe('group 1', () => {
  beforeAll(() => {
    console.log('beforeAll');
    // up db
  });
  afterAll(() => {
    console.log('afterAll');
    // down db
  });
  beforeEach(() => {
    console.log('beforEach');
  });
  afterEach(() => {
    console.log('afterEach');
  });
  test('case 1', () => {
    console.log('case 1');
    const rta = 1 + 1;
    expect(rta).toBe(2);
  });
  test('case 2', () => {
    console.log('case 2');
    const rta = 6 * 6;
    expect(rta).toBe(36);
  });
  describe('group 2', () => {
    beforeAll(() => {
      console.log('beforeAll');
      // up db
    });
    test('case 3', () => {
      console.log('case 3');
      const rta = 'afirmative';
      expect(rta).toMatch('irma');
    });
    test('case 4', () => {
      console.log('case 4');
      const rta = 'afirmative';
      expect(rta).toMatch('ative');
    });
  });
});

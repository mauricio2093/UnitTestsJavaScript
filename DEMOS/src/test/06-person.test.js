const Person = require('../06-person');

// AAA
// Arrange - Alistar nuestro escenario de pruebas / Given 'dado algo '
// Act  - Actuar sobre nuestros escenarios / When 'Cuando se ejecuta '
// Assert - resolver ipotesis / Then 'Entonces pasa esto'

describe('Test for Person', () => {
  let rta;
  // Arrange - Alistar nuestro escenario de pruebas / Given 'dado algo '
  beforeEach(() => {
    rta = new Person('Mauricio', 120, 1.8);
  });
  test('should return high', () => {
    console.log('should return high');
    // Arrange - Alistar nuestro escenario de pruebas / Given 'dado algo '
    rta.weight = 120;
    // Act  - Actuar sobre nuestros escenarios / When 'Cuando se ejecuta '
    const imc = rta.calcIMC();
    // Assert - resolver ipotesis / Then 'Entonces pasa esto'
    expect(imc).toBe('overweight level 2');
  });
  test('should return normal', () => {
    console.log('should return normal');
    // Arrange - Alistar nuestro escenario de pruebas / Given 'dado algo '
    rta.weight = 78;
    // Act  - Actuar sobre nuestros escenarios / When 'Cuando se ejecuta '
    const imc = rta.calcIMC();
    // Assert - resolver ipotesis / Then 'Entonces pasa esto'
    expect(imc).toBe('normal');
  });
  test('should return down', () => {
    console.log('should return down');
    // Arrange - Alistar nuestro escenario de pruebas / Given 'dado algo '
    rta.weight = 45;
    // Act  - Actuar sobre nuestros escenarios / When 'Cuando se ejecuta '
    const imc = rta.calcIMC();
    // Assert - resolver ipotesis / Then 'Entonces pasa esto'
    expect(imc).toBe('down');
  });
});

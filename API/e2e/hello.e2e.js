const request = require('supertest');
const createApp = require('../src/app');

describe('Test For Hello Endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });
  afterAll(async () => {
    await server.close();
  });

  describe('test for [GET] /', () => {
    test('should return "hello World"', () => {
      console.log('should return "hello World"');
      return request(app)
        .get('/')
        .expect(200)
        .then((response) => {
          expect(response.text).toEqual('Hello World!');
        });
    });
  });
});

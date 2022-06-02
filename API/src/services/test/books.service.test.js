const BooksService = require('../books.service');
const { genManyBook } = require('../../fakes/books.fake');
/* ======  Mooking  ====== */
// const fakeBooks = [
//   {
//     _id: 1,
//     name: 'Harry Potter',
//   },
//   {
//     _id: 1,
//     name: 'Ojos del perro Siberiano',
//   },
// ];
/* ======  SPIES  ====== */
const mockGetAll = jest.fn();
/* ======  Mocking  ====== */
// const MongoLibStub = {
//   getAll: () => [...fakeBooks],
//   create: () => {},
// };
/* ======  SPIES  ====== */
// const mockMongoLibStub = {
//   getAll:  mockGetAll,
//   create: () => {},
// };
/* ======  Mocking  ====== */
jest.mock('../../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;
  beforeEach(() => {
    // Arrange
    service = new BooksService();
    jest.clearAllMocks();
  });
  describe('test for getBooks', () => {
    test('should return a list books', async () => {
      console.log('should return a list books');
      // Arrange
      const fakeBooks = genManyBook(20);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const rta = await service.getBooks({});
      console.log(rta);
      // Assert
      expect(rta.length).toEqual(fakeBooks.length);
      expect(mockGetAll).toHaveBeenCalled();
      expect(mockGetAll).toHaveBeenCalledTimes(1);
      expect(mockGetAll).toHaveBeenCalledWith('books', {});
    });
    test('should return a name book', async () => {
      console.log('should return a name book');
      // Arrange
      const fakeBooks = genManyBook(4);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const rta = await service.getBooks({});
      console.log(rta);
      // Assert
      expect(rta[0].name).toEqual(fakeBooks[0].name);
    });
  });
});

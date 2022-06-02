const { faker } = require('@faker-js/faker');

const genOneBook = () => ({
  _id: faker.datatype.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price(),
});

const genManyBook = (size) => {
  const limit = size ?? 10;
  const fakeBooks = [];
  for (let index = 0; index < limit; index += 1) {
    fakeBooks.push(genOneBook());
  }
  return [...fakeBooks];
};

module.exports = { genOneBook, genManyBook };

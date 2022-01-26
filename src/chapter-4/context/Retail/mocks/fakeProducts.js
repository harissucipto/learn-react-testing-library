import faker from '@faker-js/faker'

const fakeProducts = [
  {
    id: '343',
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: faker.image.fashion()
  },
  {
    id: '2343',
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    category: faker.commerce.department(),
    image: faker.image.fashion()
  }
]

export default fakeProducts

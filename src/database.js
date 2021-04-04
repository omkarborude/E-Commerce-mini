import faker from "faker";
faker.seed(123);
export const productLists = [...Array(20)].map((item) => ({
  id: faker.random.uuid(),
  name: faker.commerce.productName(),
  image: faker.random.image(),
  material: faker.commerce.productMaterial(),
  price: faker.commerce.price(),
  inStock: faker.random.arrayElement([true,false]),
  FastDelivery: faker.random.arrayElement([true,false]),
  // FastDelivery: faker.random.boolean(),
  category: faker.random.arrayElement(["Shirt", "Jacket", "Jeans", "T-Shirt"]),
  quantity: 0
}));

export const categories = ["Shirt", "Jacket", "Jeans", "T-Shirt"];

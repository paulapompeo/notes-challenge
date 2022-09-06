import { faker } from "@faker-js/faker";

const mentions = [];

for (let i = 0; i < 40; i++) {
  mentions.push({
    name: faker.name.fullName(),
    link: faker.internet.url(),
    avatar: faker.image.avatar(),
  });
}

export default mentions;

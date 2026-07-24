import { PrismaClient } from '@prisma/client';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient();

async function main() {
  const seedData = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'seed.json'), 'utf-8')
  );

  for (const category of seedData) {
    const cat = await prisma.category.create({
      data: {
        name: category.name,
        slug: category.slug,
        icon: category.icon,
      },
    });

    for (const product of category.products) {
      await prisma.product.create({
        data: {
          name: product.name,
          description: product.description,
          price: product.price,
          categoryId: cat.id,
        },
      });
    }
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

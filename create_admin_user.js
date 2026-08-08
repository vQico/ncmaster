const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcrypt");

const prisma = new PrismaClient();

async function main() {
  const email = "admin@ncmastergarage.com";
  const password = "ncmaster2026!";
  const passwordHash = await bcrypt.hash(password, 10);

  const user = await prisma.user.upsert({
    where: { email },
    update: {
      passwordHash,
      role: "SUPER_ADMIN",
      name: "NC MASTER Admin",
    },
    create: {
      email,
      passwordHash,
      role: "SUPER_ADMIN",
      name: "NC MASTER Admin",
    },
  });

  console.log("Admin user seeded in SQLite database:", user.email);
}

main()
  .catch((e) => console.error(e))
  .finally(() => prisma.$disconnect());

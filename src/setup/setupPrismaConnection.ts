import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const initializePrisma = async () => {
     await prisma.user.findFirst().catch((error) => {
          throw new Error(`${error}`);
     });
};

export default prisma;

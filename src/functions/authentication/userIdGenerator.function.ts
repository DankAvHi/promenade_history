import prisma from "../../setup/setupPrismaConnection";

const randomIdGenerator = async (): Promise<number> => {
     let id;
     while (true) {
          id = Math.floor(Math.random() * 10000000);

          const isExisted = !!(await prisma.user.findUnique({
               where: {
                    iduser: id,
               },
               select: { iduser: true },
          }));
          if (!isExisted) {
               break;
          }
     }
     return id;
};

export default randomIdGenerator;

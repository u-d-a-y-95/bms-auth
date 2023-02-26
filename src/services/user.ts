import { User } from "@prisma/client";
import prisma from "../db";

export const getAll = async () => {
  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    return error;
  }
};
export const add = async (user: User) => {
  try {
    const newUser = await prisma.user.create({
      data: user,
    });
    return newUser;
  } catch (error) {
    return error;
  }
};

export const getOne = async (mobile: string) => {
  return prisma.user.findUnique({
    where: {
      mobile,
    },
  });
};

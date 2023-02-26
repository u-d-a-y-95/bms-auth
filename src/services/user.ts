import { User } from "@prisma/client";
import prisma from "../db";

export const addUser = async (user: User) => {
  try {
    const newUser = await prisma.user.create({
      data: user,
    });
    return newUser;
  } catch (error) {}
};

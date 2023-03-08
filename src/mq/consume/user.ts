import { User } from "@prisma/client";
import { Channel } from "amqplib";
import { add } from "../../services/user";
export const addUser = async (channel: Channel, payload: any, message: any) => {
  try {
    const user:any = {
      name: payload.name,
      mobile: payload.mobile,
      password: payload.password,
      role: payload.role,
      userId: payload.id,
      companyId: payload.companyId,
    };
    const newUser = await add(user);
    console.log(newUser)
    channel.ack(message);
  } catch (error) {}
};

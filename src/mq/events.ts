import { addUser } from "./consume/user";

export const CONSUME_EVENT = [
  {
    name: "ORG:ADD-USER",
    action: addUser,
  },
];

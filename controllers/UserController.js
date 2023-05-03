import { PrismaClient } from "@prisma/client";
import userMiddleware from "../middleware/userMiddleware.js";
import { getAllEntity, getEntityById } from "./BaseController.js";

const prisma = new PrismaClient()
prisma.$use(userMiddleware)
const entity = prisma.user

export const getAllUsers = getAllEntity(entity, { bids:true })

export const getUserById = getEntityById(entity, {bids:true})
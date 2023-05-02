import { PrismaClient } from "@prisma/client";
import userMiddleware from "../middleware/userMiddleware.js";
import { getAll, getById } from "./BaseController.js";

const prisma = new PrismaClient()
prisma.$use(userMiddleware)
const entity = prisma.user

export const getAllUsers = getAll(entity, { bids:true })

export const getUserById = getById(entity, {bids:true})
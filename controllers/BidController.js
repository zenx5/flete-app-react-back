import { PrismaClient } from "@prisma/client";
import { getAll, getById } from "./BaseController.js";

const prisma = new PrismaClient()
const entity = prisma.bid

export const getAllBids = getAll(entity,{ user:true, auction:true } )
export const getBidById = getById(entity, { user:true, aution:true })
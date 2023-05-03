import { PrismaClient } from "@prisma/client";
import { getAllEntity, getEntityById, createEntity } from "./BaseController.js";

const prisma = new PrismaClient()
const entity = prisma.bid

export const getAllBids = getAllEntity(entity,{ user:true, auction:true } )
export const getBidById = getEntityById(entity, { user:true, aution:true })
export const setBid = createEntity(entity)
import { PrismaClient } from "@prisma/client";
import { getAll, getById } from "./BaseController.js";

const prisma = new PrismaClient()
const entity = prisma.auction

export const getAllAuctions = getAll( entity, { bids:true })
export const getAuctionById = getById( entity, { bids:true })

import { PrismaClient } from "@prisma/client";
import auctionMiddleware from "../middleware/auctionMiddleware.js";
import { getAllEntity, getEntityById } from "./BaseController.js";

const prisma = new PrismaClient()
prisma.$use(auctionMiddleware)
const entity = prisma.auction

export const getAllAuctions = getAllEntity( entity, { bids:true })
export const getAuctionById = getEntityById( entity, { bids:true })

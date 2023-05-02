import { PrismaClient } from "@prisma/client";
import auctionMiddleware from "../middleware/auctionMiddleware.js";
import { getAll, getById } from "./BaseController.js";

const prisma = new PrismaClient()
prisma.$use(auctionMiddleware)
const entity = prisma.auction

export const getAllAuctions = getAll( entity, { bids:true })
export const getAuctionById = getById( entity, { bids:true })

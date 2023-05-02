import { Router } from 'express';
import { getAllAuctions, getAuctionById } from '../controllers/AuctionController.js';

const auctionRouter = Router()

auctionRouter.get('/', getAllAuctions)
auctionRouter.get('/:id', getAuctionById)

export default auctionRouter;






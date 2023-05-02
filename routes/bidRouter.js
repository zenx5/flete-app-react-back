import { Router } from 'express';
import { getAllBids, getBidById } from '../controllers/BidController.js';

const bidRouter = Router()

bidRouter.get('/', getAllBids)
bidRouter.get('/:id', getBidById)

export default bidRouter;






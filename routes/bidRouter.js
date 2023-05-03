import { Router } from 'express';
import { getAllBids, getBidById, setBid } from '../controllers/BidController.js';

const bidRouter = Router()

bidRouter.get('/', getAllBids)
bidRouter.post('/',setBid)
bidRouter.get('/:id', getBidById)

export default bidRouter;






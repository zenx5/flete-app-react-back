import cors from 'cors'
import Express from "express";
import bodyParser from 'body-parser'
import userRouter from './routes/userRouter.js';
import bidRouter from './routes/bidRouter.js'
import auctionRouter from './routes/auctionRouter.js'

const app = Express()

app.use(cors())
app.use( bodyParser.json() )
app.use('/users', userRouter)
app.use('/bids', bidRouter)
app.use('/auctions', auctionRouter)

app.get('/', (req, res) => {
    res.status(200).send('hola mundo')
})



app.listen(5000)
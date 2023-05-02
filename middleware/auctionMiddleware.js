export default async function auctionMiddleware(params, next) {
    if( params.model==='Auction') {
        const result = await next(params)
        if( params.action === 'findMany' ) {
            return result.map( item => ({
                ...item,
                current_price: calculatePrice(item.price, item.bids),
                last_price: calculatePrice(item.price, item.bids.slice(0,-1)),
                original_price: item.price
            }))
        } else {
            return {
                ...result,
                current_price: calculatePrice(result.price, result.bids),
                last_price: calculatePrice(result.price, result.bids.slice(0,-1)),
                original_price: result.price
            }
        }
    }
}

const calculatePrice = (price, bids) => {
    let total_bids = 0
    for( const bid of bids ) {
        total_bids += bid.value
    }
    return price - total_bids;
}
export default async function userMiddleware(params, next) {
    console.log( 'model', params.model )
    if( params.model==='User') {
        const result = await next(params)
        if( params.action === 'findMany' ) {
            return result.map( item => ({
                ...item,
                password:undefined,
                role: item.role.split(',')
            }))
        } else {
            return {
                ...result,
                password:undefined,
                role: result.role.split(',')
            }
        }
    }
}
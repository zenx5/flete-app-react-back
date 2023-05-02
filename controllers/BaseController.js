
export const getAll = (entity, include) => async (req, res) => {
    try{
        console.log('init')
        const response = await entity.findMany({
            include
        })
        return res.status(200).send(response)
    } catch (error) {
        res.status(501).send(error)
    }
}

export const getById = (entity, include) => async (req, res) => {
    try{
        const { id } = req.params

        const response = await entity.findUnique({
            where: {
                id: parseInt(id)
            },
            include
        })
        return res.status(200).send(response)
    } catch (error) {
        res.status(501).send(error)
    }
}
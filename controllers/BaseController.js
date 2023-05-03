
export const getAllEntity = (entity, include) => async (req, res) => {
    try{
        console.log('init')
        const response = await entity.findMany({
            include
        })
        return res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
}

export const getEntityById = (entity, include) => async (req, res) => {
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
        res.status(500).send(error)
    }
}

export const createEntity = (entity) => async (req, res) => {
    try{
        const data = req.body
        const response = await entity.create({
            data
        })
        res.status(200).send(response)
    } catch(error) {
        res.status(500).send(error)
    }
}
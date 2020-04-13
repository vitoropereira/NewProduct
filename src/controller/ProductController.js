const connection = require('../database/connection')

module.exports = {
    async index(request, response) {
        const { page = 1 } = request.query

        const [count] = await connection('products').count();

        const products = await connection('products')
            .select('*')
            .limit(5)
            .offset((page - 1) * 5)

        response.header('X-Total-Count', count['count(*)'])

        return response.json(products)
    },

    async show(request, response) {
        const { id } = request.params

        const product = await connection('products')
            .where('id', id)
            .select('*')
            .first()

        return response.json(product)
    },

    async create(request, response) {
        const { title, description, url } = request.body

        const data = await connection('products').insert({
            title,
            description,
            url,
        })

        return response.json(data)
    },

    async update(request, response) {
        const { id } = request.params
        const { title, description, url } = request.body

        const data = await connection('products')
            .where('id', id)
            .select('*')
            .first()
            .update({
                title,
                description,
                url,
            })
        return response.json(data)
    },

    async destroy(request, response) {
        const { id } = request.params

        const data = await connection('products')
            .where('id', id)
            .select('*')
            .first()
            .delete()

        return response.json(data)

    }


}
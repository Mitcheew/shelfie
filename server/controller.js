// const defImg = 'https://images.vexels.com/media/users/3/154006/isolated/preview/17b0e747c26cd506f92ab379f3072807-x-eyes-colored-stroke-emoticon-by-vexels.png'

module.exports = {

    create: (req, res) => {
        const { imageUrl, productName, price } = req.body;
        const dbInstance = req.app.get('db')
        dbInstance.create_product([imageUrl, productName, price]).then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    read: (req, res) => {
        const dbInstance = req.app.get('db')
        dbInstance.get_inventory().then((response) => {
            res.status(200).send(response)
        })
        .catch((err) => {
            console.log(err)
        })
    },
    update: (req, res) => {
        const { id } = req.params;
        const dbInstance = req.app.get('db')
        dbInstance.delete_product([id]).then((response) => {
            res.status(200).send(response)
        })
            .catch((err) => {
                console.log(err)
            })
    },
    delete: (req, res) => {
        const { id } = req.params;
        const dbInstance = req.app.get('db')
        dbInstance.delete_product([id]).then((response) => {
            res.status(200).send(response)
        })
            .catch((err) => {
                console.log(err)
            })
    }
}
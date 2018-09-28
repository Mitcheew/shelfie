// const defImg = 'https://images.vexels.com/media/users/3/154006/isolated/preview/17b0e747c26cd506f92ab379f3072807-x-eyes-colored-stroke-emoticon-by-vexels.png'

module.exports = {

    create: (req, res) => {
        let { imageUrl, productName, price } = req.body;
        console.log(imageUrl, productName, price)
        const dbInstance = req.app.get('db')
        dbInstance.create_product([imageUrl, productName, price]).then((response) => {
            res.status(200).send(response)
        })
    },

    read: (req, res) => {
        const dbInstance = req.app.get('db')
    dbInstance.get_inventory().then((response) => {
        res.status(200).send(response)
    })
    },
    update: (req, res) => {

    },
    delete: (req, res) => {
        
    }
}
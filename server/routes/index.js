const router = require('express').Router()
const routerBooks = require('./routerBooks')
const routerAuthor = require('./routerAuthors')

router.get('/', (req, res) => {
    res.status(200).json({
        Message: "Success"
    })
})

router.use('/api/v1/books', routerBooks)
router.use('/api/v1/authors', routerAuthor)

module.exports = router
const router = require('express').Router();

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

router.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html')
})

router.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html')
})

module.exports = router;

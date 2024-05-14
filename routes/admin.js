const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res, next) => {
    console.log("In the middleware");
    res.send('<form action="/admin/add-product" method="post"><input type="text" name="title" placeholder="Title"> <br> <br>' +
        '<input type="number" name="sizeOfProduct" placeholder="Size"><button type="submit">Add Product</button></form>');
})

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/shop'); 
});

module.exports = router;

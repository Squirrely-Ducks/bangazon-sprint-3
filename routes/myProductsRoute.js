const { Router } = require("express");
const router = Router();

router.get("/myProductsRoute", (req, res, next) => { 
    res.render("my-products");
});

module.exports = router;

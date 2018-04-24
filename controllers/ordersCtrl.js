"use-strict";


module.exports.viewShoppingCart = (req, res) => {
  const userId = req.app.get("user").id
  const { Orders, Product } = req.app.get("models");
  Orders.findAll({
    where:{
      paymentTypeId: null,
      userId
    },
    include: [{
      model:Product,
      }
  ]})
    .then((viewOpenOrders) => {
      res.render("cart", { viewOpenOrders })
    })
};
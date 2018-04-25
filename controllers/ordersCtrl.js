"use-strict";


module.exports.viewShoppingCart = (req, res) => {
  const userId = req.app.get("user").id;
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
      // res.json(viewOpenOrders);
      res.render("cart", { viewOpenOrders })
    })
};

module.exports.cancelOrder = (req, res) => {
  const userId = req.app.get("user").id;
  const { Orders } = req.app.get("models");
  Orders.destroy({
    where:{
      paymentTypeId: null,
      userId
    }
  })
    .then(() => {
      res.redirect("/account")
    })
};
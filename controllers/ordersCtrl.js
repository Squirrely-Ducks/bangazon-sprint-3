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

module.exports.selectPaymentType = (req, res) => {
  const userId = req.app.get("user").id;
  const { Payment_Types } = req.app.get("models");
  Payment_Types.findAll({
    where:{userId}
  })
    .then((viewPaymentTypes) => {
      res.render("select-payment", { viewPaymentTypes })
    })
};

module.exports.addPaymentToOrder = (req, res) => {
  const userId = req.app.get("user").id;
  const { Orders } = req.app.get("models");
  Orders.update({paymentTypeId: req.params.id},
  {where: {userId, paymentTypeId: null}}
  )
    .then(() => {
      res.redirect("/account")
    })
};

"use-strict";

module.exports.myAccountView = (req, res) => {
  const user = req.app.get("user");
  const { User } = req.app.get("models");
  User.findOne({where:{id: user.id}})
  .then((foundUser)=>{
    let userData = foundUser.dataValues
    res.render("my-account", { userData });
  })

};

module.exports.editAccount = (req, res, next) => {
  const userId = req.app.get("user").id;
  const { User } = req.app.get("models");
  User.find({ where: { id: userId } })
    .then(foundUser => {
      return foundUser.updateAttributes({
        street: req.body.street,
        city: req.body.city,
        state: req.body.state,
        zip: req.body.zip,
        phone: req.body.phone
      });
    })
    .then(() => {
      res.redirect(`/account`);
    });
};

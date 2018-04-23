
'use-strict';

module.exports.myAccountView = (req, res) => {
  const user = req.app.get('user')
  res.render('my-account', { user });
};


module.exports.editAccount = (req, res, next) => {
  
}
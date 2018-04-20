"use strict";

const displaySellProduct = (req, res, next) => {
  let { Product_Type } = req.app.get('models');
  Product_Type.findAll({raw: true})
  .then(productType => {
    res.render('sell-product', {productType});
  });

};

const addSellProduct = (req, res, next) => {
  let { Product } = req.app.get('models');
  let user = req.app.get("user");
  let {...newProduct} = req.body;
  //CHECK FOR USER
  if (user) {
    //Add Create Date
    newProduct.create_date = (new Date()).toString();
    //FORMAT PRICE
    newProduct.price = newProduct.price.replace(".","");
    //ADD USER ID
    newProduct.userId = user.id;
    //POST TO DATABASE
    Product.create(newProduct)
    .catch(err => {
      //TODO: ADD ERROR HANDLERS
      console.log("ERROR: ", err);
    });
  } else {
      res.render('login');

  }
}

// const validateFields = ({title, price, description, img, quantity, productTypeId }) => {
//   price = price.replace(".", "");
//   if( !/\d+/.test(price) ) {p} 
// };

module.exports = { displaySellProduct, addSellProduct };
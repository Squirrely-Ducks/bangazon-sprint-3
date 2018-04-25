"use strict";


const displayOrder = (req, res, next) => {
    let {Orders} = req.app.get('models');    
    Orders.findAll({raw: true, where: {userId:req.user.id}})
    .then(closedOrder => {
        if (!closedOrder.length){
            res.redirect("cart")
        } else 
      res.render('view_orders', {closedOrder});
    }).catch(err=>{
        console.log('ERROR:',err);        
    })
};






const displayProductsOnOrder = (req, res, next) => {
    console.log("hello");

        const userId = req.app.get("user").id;
        const { Orders, Product } = req.app.get("models");
        Orders.findAll({
          where:{
            // paymentTypeId: !null,
            userId
          },
          include: [{
            model:Product,
            }
        ]})
          .then((viewProducts) => {
            res.render("order-products-details", { viewProducts })
          })
};


module.exports= {displayOrder, displayProductsOnOrder};













"use strict";

module.exports.viewShoppingCart = (req, res) => {
    // const userId = req.app.get("user").id;
    let userId = req.body.id
    
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

const displayOrder = (req, res, next) => {
    let { Orders, Product } = req.app.get('models');  
    let user = req.app.get("user");
    if (user){
        Orders.findAll({raw: true, where: {user}})        
        .then((orders)=>{
            // if (orders.length === undefined || 0){
        //     res.redirect("cart");
        // } else  
            res.render('view-orders',{orders})    
        })
        .catch(err=>{
            console.log('ERROR:',err);
        })
    } else {
        res.render('login');
        }
    }


module.exports= {displayOrder};

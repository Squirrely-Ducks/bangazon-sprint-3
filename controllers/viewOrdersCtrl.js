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



module.exports= {displayOrder};













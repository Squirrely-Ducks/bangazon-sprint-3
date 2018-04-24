"use strict";

const displayPaymentType = (req, res, next) => {

    let {Payment_Types} = req.app.get('models');    
    let userId = req.user.id;    

    Payment_Types.findAll({raw: true, where: {userId}})
    .then(paymentType => {
      res.render('payment-types', {paymentType});
    }).catch(err=>{
        console.log('ERROR:',err);        
    })
};

const addPaymentType = (req, res, next)=>{

let {Payment_Types} = req.app.get('models');
let user = req.app.get("user");
let {...newPaymentType}= req.body;

if (user){
    newPaymentType.userId = user.id;
    Payment_Types.create(newPaymentType)
    .then((paymentType)=>{
        res.redirect('/payment-types')
    })
    .catch(err=>{
        console.log('ERROR:',err);
    })
} else {
    res.render('login');
    }
}
const deletePaymentType = (req,res,next)=>{
    let { Orders } =req.app.get('models');
    let { Payment_Types } = req.app.get('models');
    let { id } = req.params;
    Payment_Types.destroy({where: {id}})
    .then(() => {
        res.redirect("/payment-types");
    })
    .catch(err=>{
        console.log('ERROR:',err);
    });
}
module.exports = {addPaymentType, displayPaymentType, deletePaymentType};





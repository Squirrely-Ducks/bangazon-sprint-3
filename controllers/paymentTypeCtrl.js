"use strict";

const displayPaymentType = (req, res, next) => {
    let {Payment_Types} = req.app.get('models');    
    let userId = req.app.get('user').id;    
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
        //in case to redirect to new payment
        // const { id } = paymentType.get({plain:true});
        // res.redirect(`/payment-type/details/${id}`); 
        res.redirect('/payment-types')
    })
    .catch(err=>{
        console.log('ERROR:',err);
    })
} else {
    res.render('login');
    }
}

module.exports = {addPaymentType, displayPaymentType};





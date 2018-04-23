"use strict";

const getUserPaymentType = (req,res,next)=>{
    let {Payment_Types} = req.app.get('models');    
    let id = req.params.id;
    Payment_Types.findOne({raw: true, where: {id}})
    .then((paymentType)=>{
        res.render("addPaymentTypes", { paymentType });
    }) .catch(err=>{
        console.log('ERROR:',err);
    })
} 
module.exports = {getUserPaymentType};
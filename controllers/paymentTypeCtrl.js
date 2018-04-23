"use strict";


const addPaymentType = (req, res, next)=>{

let {Payment_Types} = req.app.get('models');
let user = req.app.get("user");
let {...newPaymentType}= req.body;

if (user){
    newPaymentType.userId = user.id;
    Payment_Types.create(newPaymentType)
    .then(()=>{
        res.render("welcome")   
    })
    .catch(err=>{
        console.log('ERROR:',err);
    })
} else {
    res.render('login');
    }
}

module.exports = {addPaymentType};
"use strict";

// Given the user is authenticated
// When the user clicks on a profile affordance in the navigation bar
// And the user clicks on the Add Payment Option hyperlink in their profile
// Then the user can fill out the payment option form
// And click Submit to save payment option



const addPaymentType = (req, res, next)=>{

    console.log(req.body);
let {Payment_Types} = req.app.get('models');
let user = req.app.get("user");
let {...newPaymentTypes}= req.body;

if (user){
    newPaymentTypes.userId = user.id;
    Payment_Types.create(newPaymentType)
    .then((data)=>{
        console.log(data)
    })
    .catch(err=>{
        console.log('ERROR:',err);
    })
} else {
    res.render('login');
    }
}

module.exports = {addPaymentType};
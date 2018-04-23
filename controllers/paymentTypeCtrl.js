"use strict";

// Given the user is authenticated
// When the user clicks on a profile affordance in the navigation bar
// And the user clicks on the Add Payment Option hyperlink in their profile
// Then the user can fill out the payment option form
// And click Submit to save payment option

const getUserPaymentType = (req,res,next)=>{
    let id = req.app.get('user').id
    Payment_Types.findById(id)
    .then((data)=>{
        console.log(data);
    }) .catch(err=>{
        console.log('ERROR:',err);
    })
} 

const addPaymentType = (req, res, next)=>{

    console.log(req.body);
let {Payment_Types} = req.app.get('models');
let user = req.app.get("user");
let {...newPaymentType}= req.body;

if (user){
    newPaymentType.userId = user.id;
    Payment_Types.create(newPaymentType)
    .then((data)=>{
        return getUserPaymentType()
    }).then(()=>{
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
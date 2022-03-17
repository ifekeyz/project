// const express = require('express');
// const _deeplink = require('node-deeplink');


// const path = require("path");
// module.exports = {
//   // to customize your Truffle configuration!
//   contracts_build_directory: path.join(__dirname, "/build"),
//   networks: {
//     development: {
//       host: "127.0.0.1",
//       port: 8545,
//       network_id: "*" //Match any network id
//     }
//   }
// };



var express = require("express");
var nodemailer = require('nodemailer');

var router = express.Router();




// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
    port: 465,               // true for 465, false for other ports
    host: "smtp.gmail.com",
       auth: {
            user: 'youremail@gmail.com',
            pass: 'password',
         },
    secure: true,
    });




router.get("/wallet", function(req, res) {

    res.render("index");
    });


router.post('/text-mail',(req, res)=>{
    const {to,subject,text} = res.body;
    const mailData ={
        from: '',
        to: '',
        subject: '',
        text: '',
    };
});
transporter.sendMail(mailData, (error, info)=>{
    if(error){
        return console.log(error)
    }
    res.status(200).send({message: 'mail sent',message_id: info.message_id});
});
    
module.exports = router;
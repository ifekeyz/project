const { response } = require("express");
var express = require("express");

var router = express.Router();


router.get("/", function(req, res) {

res.render("index");
});

router.get("/wallet", function(req, res) {

   res.render("wallet");
   });

router.post("/wallet", function(req, res){
   res.redirect('https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp');
});

// const fetch = require('node-fetch');
// fetch('https://api.github.com/users/github')
//     .then(res => res.json())
//     .then(json => console.log(json));

// const request = require("request")
// request({
//    uri:"",
//    // json:true
// },(err,response,body)=>{
//    console.log(body);

// });

module.exports = router;
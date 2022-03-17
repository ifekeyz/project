var express = require("express");
var deeplink = require('node-deeplink');
var path = require("path");

var routes = require("./routes");
var trustRoute = require("./Wallet/trustRoute/index")

var app = express();

app.set("port", process.env.PORT || 5000);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(routes);
app.use("/assets",express.static('assets'))
app.use(trustRoute);

app.listen(app.get("port"), function(){
    console.log("Server started on port " + app.get("port"));
})


app.get(
    '/deeplink',
    deeplink({
      fallback: 'https://cupsapp.com',
      android_package_name: 'com.citylifeapps.cups',
      ios_store_link:
        'https://itunes.apple.com/us/app/cups-unlimited-coffee/id556462755?mt=8&uo=4'
    })
  );





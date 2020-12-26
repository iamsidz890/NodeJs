// root file for our nodejs app is app.js or server.js
// Core modules ----- http(launch server send req), https , fs , path , os
// require takes path or name of module....   /(absolute)    ./(relative)
//////////////////////////////////////////////////Server////////////////////////////////////////
// const http = require("http");
// const fs = require("fs");
// const routes = require("./routes"); //route file...will look for module exports(removed for working with express)
// http.  will show fields and methods

// function rqListener(req, res) {
// 	// first one is data about req and the other is res.
// }
// http.createServer(rqListener); //takes in req listener calls for every req. or can also use anonymous func

// const server = http.createServer((req, res) => {
// 	// const url = req.url;
//     // const method = req.method;

// }); //this retuurns a server and store that in server
// const server = http.createServer(routes);
// const server = http.createServer(routes.handler);
// console.log(routes.someText);

// server.listen(3000); //node will keep running and listening for incoming req...port & hostname
// ongoing looping process keeps on listening .........EVENT LOOP(keeps running as long as work....)
////////////////////////////////////////////////////////Server up and running/////////////////////////////////////////

//////////////////Streams & Buffers////////////////
// Stream-------req1-----req2-------  -- -- - - ---------fully parsed(jaise jaise aata jae parse karte jao in case of badi badi files).......organise theese chunks...BUFFER(bus stop climb leave etc)

// /////////BLOCKING AND NON BLOCKING CODE////////////////////////////////
// writefilesync----blocks code below untill done
// writeFile------aceepts a callback also (err)=>{  }

// ---------event loop for registry and callbacks
// ---------worker pool for heavy lifting
// npm is installed togther with nodejs.
// in package.json for custom names use npm run start-server
///////////////////////////////////////////////////////EXPRESS////////////////////////////////////////////////////////////
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.set("view engine", "pug"); //tell express which engine to use...
app.set("views", "views"); //where to find our views

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
///////////////////////////MIDDLEWARE//////////////////////////////////
// for parsing middleware
app.use(bodyParser.urlencoded({ extended: false })); //will pass next by itself
//  end for parsing middleware
app.use(express.static(path.join(__dirname, "public")));

// app.use("/admin", adminRoutes); //only the routes starting with /admin will be accepted and the path is also changedd
app.use("/admin", adminData.routes); //adminDatta is all exports
app.use(shopRoutes);

// if we would  have use in the routes then the order will matter but since we are using get and post then it is specifci and hence the order dosent matters much

// app.use((req, res, next) => {
// 	console.log("This always runs");
// 	next();
// });
//catch all for undefined paths
app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
//////////////////////////////////////MIDDLEWARE/////////////////////////
// const server = http.createServer(app);
// server.listen(3000);
/////or////
app.listen(3000);

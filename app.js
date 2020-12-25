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
const http = require("http");
const express = require("express"); //gives a function e which is basically express
const app = express(); //express app.....by using function.....lot of logic here
///////////////////////////MIDDLEWARE//////////////////////////////////
app.use((req, res, next) => {
	// next is function , that will be passed to this func using express
	console.log("this is middleware");
	res.send("<h1>Hello from sec middeware</h1>"); //header will be setted itsef
	next(); //now  it will move to sec middleware...allows the req to move to next func/
}); //for every incoming request
app.use((req, res, next) => {
	// next is function , that will be passed to this func using express
	console.log("this is another middleware");
}); //this will not show as we need to specify and send it to sec
//////////////////////////////////////MIDDLEWARE/////////////////////////
const server = http.createServer(app);
server.listen(3000);

// what user sees

const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");
router.get("/", (req, res, next) => {
	//path
	// next is function , that will be passed to this func using express
	// trigger this only for req that go to path /
	// console.log("this is middleware");
	// res.send("<h1>Hello from sec middeware</h1>"); //header will be setted itsef
	// res.sendFile("views/shop.html"); //wrt app.js.........any path dosent seems to  work import path
	res.sendFile(path.join(rootDir, "views", "shop.html")); //__dirname(point to routes folder) holds sbsolute path of our os
	// next(); //now  it will move to sec middleware...allows the req to move to next func/
}); //for every incoming request
// app.use((req, res, next) => {
// 	// next is function , that will be passed to this func using express
// 	console.log("this is another middleware");
// }); //this will not show as we need to specify and send it to sec
module.exports = router;

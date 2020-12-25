// creation of prod
const express = require("express");
const router = express.Router();
const path = require("path");
const rootDir = require("../util/path");

router.get("/add-product", (req, res, next) => {
	//path
	// next is function , that will be passed to this func using express
	// trigger this only for req that go to path /
	// console.log("this is add product middleware");
	// res.send("<h1>The add-product Page</h1>"); //header will be setted itself
	// res.send(
	// 	'<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>'
	// );
	res.sendFile(path.join(rootDir, "views", "add-product.html"));
	// console.log(req.body); //will return undefined not parsed
	// next(); //now  it will move to sec middleware...allows the req to move to next func/
});

router.post("/add-product", (req, res, next) => {
	// we have function here which will execute for products
	//limit this middlewares execution to post request only...instead of use ...we have to use app.get()
	console.log(req.body);
	res.redirect("/");
});

module.exports = router;

// instead of app we will use router and this router is getting exported so this willl be registered as  routes in Router

const fs = require("fs");

// for connecting
const requestHandler = (req, res) => {
	const url = req.url;
	const method = req.method;
	if (url === "/") {
		res.write("<html>"); //write dtdaa to response
		res.write("<head><title>Enter Message</title></head>");
		res.write(
			"<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Submit</button></form></body>"
		);
		res.write("</html>");
		return res.end();
		// we need to return res.end() cuz after this no code will be executed else it will keep executing....
		// action will change url to /mesage and it will not go into the if hence exits out
	}
	if (url === "/message" && method === "POST") {
		const body = [];
		req.on("data", (chunk) => {
			// something to interact with the chunk
			console.log(chunk); //will be chunk we cant work wth that
			body.push(chunk);
		}); ///fired whenever a new chunk is raedy
		req.on("end", () => {
			// to work we need buffer or bus stop for working
			const parsedBody = Buffer.concat(body).toString();
			console.log(parsedBody); //normal text we can work with
			const message = parsedBody.split("=")[1];
			fs.writeFileSync("message.txt", message);
		});

		// fs.writeHead(302,{});//status code , headerset
		res.statusCode = 302;
		res.setHeader("Location", "/");
		return res.end();
	}
	// console.log(req.url, req.method, req.headers);
	// process.exit(); //server will hard exit event loop as there is no more work to do
	res.setHeader("Content-type", "text/html"); //saying the type is html like we have html code
	res.write("<html>"); //write dtdaa to response
	res.write("<head><title>My Node page</title></head>");
	res.write("<body><h1>Hello mf from node html</h1></body>");
	res.write("</html>");
	res.end(); //we need to tell node its over
}; //this retuurns a server and store that in server

// module.exports = requestHandler;

// if we have many things

module.exports = {
	handler: requestHandler,
	someText: "Hardcore code",
};

// module.exports.handler = requestHandler;  can also remove modules

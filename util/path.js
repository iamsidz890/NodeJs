//helps to construct path to the parent directory
const path = require("path");
module.exports = path.dirname(process.mainModule.filename);

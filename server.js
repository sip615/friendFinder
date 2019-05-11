const express = require("express");
const app = express();

//start listening on port 8080
const PORT = process.env.PORT || 8080;

//Start up a server for this application. Most of the code in this file is copy/paste standard server code per instruction.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(PORT, function() {
	console.log(`App listening on PORT: ${PORT}`);
});

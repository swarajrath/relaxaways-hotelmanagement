const express = require("express");
require("./db/mongoose");
const path = require("path");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const passport = require("passport");
const morgan = require("morgan");
const keys = require("./config/keys");
const session = require("express-session");

// MODELS
require("./models/Users");
require("./models/hotel");

// SERVICES
require("./services/passport")(passport); // pass passport for configuration

// set up our express application
app.use(morgan("dev"));
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/public", express.static("public"));

app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
	session({
		secret: "fraggle-rock", //pick a random string to make the hash that is generated secure
		resave: false, //required
		saveUninitialized: false //required
	})
);

app.use((req, res, next) => {
	next();
});

app.use(passport.initialize());
app.use(passport.session());

require("./routes/hotelsRoutes")(app);
require("./routes/topRoutes")(app);
require("./routes/authRoutes")(app);

if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));

	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
	});
}

require("./middlewares/serverLog.js")(app);

module.exports = app;


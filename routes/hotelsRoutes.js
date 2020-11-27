const multer = require("multer");
const uuidv4 = require("uuid/v4");
const {
	hotels_get,
	hotels_get_by_id,
	hotels_update,
	hotels_post,
	hotels_delete_by_id
} = require("./../controllers/hotelRoutes");


const DIR = "public/";

const storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, DIR);
	},
	filename: (req, file, cb) => {
		const fileName = file.originalname
			.toLowerCase()
			.split(" ")
			.join("-");
		cb(null, uuidv4() + "-" + fileName);
	}
});

const upload = multer({
	storage: storage,
	fileFilter: (req, file, cb) => {
		if (
			file.mimetype == "image/png" ||
			file.mimetype == "image/jpg" ||
			file.mimetype == "image/jpeg"
		) {
			cb(null, true);
		} else {
			cb(null, false);
			return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
		}
	}
});

module.exports = app => {

	app.get("/api/hotels", hotels_get);


	app.post("/api/hotels", upload.array("hotel_images", 6), hotels_post);


	app.get("/api/hotels/:hotelsId", hotels_get_by_id);


	app.patch("/api/hotels/:hotelsId", hotels_update);


	app.delete("/api/hotels/:hotelsId", hotels_delete_by_id);
};

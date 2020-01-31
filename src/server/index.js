//--------------------------
//         Imports        |
//-------------------------
const express = require("express");
const mongo = require("mongodb").MongoClient;
const path = require("path");

const app = express();
const url = "mongodb://localhost:27017";

let db, trips, expenses;
//--------------------------
//        Database        |
//-------------------------
mongo.connect(
	url,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true
	},
	(err, client) => {
		if (err) {
			console.error(err);
			return;
		}
		db = client.db("tripcost");
		trips = db.collection("trips");
		expenses = db.collection("expenses");
	}
);
function login(user, pass) {}
//--------------------------
//       Server bs        |
//-------------------------
app.use(express.json());

//--------------------------
//          Routes        |
//-------------------------
app.post("/trip", (req, res) => {
	const name = req.body.name;
	trips.insertOne({ name: name }, (err, result) => {
		if (err) {
			console.error(err);
			res.status(500).json({ err: err });
			return;
		}
		console.log("received post from" + req.connection.localAddress);
		res.status(200).json({ ok: true });
	});
});
app.get("/trips", (req, res) => {
	trips.find().toArray((err, items) => {
		if (err) {
			console.error(err);
			res.status(500).json({ err: err });
			return;
		}
		res.status(200).json({ trips: items });
	});
});
app.post("/expense", (req, res) => {});
app.get("/expenses", (req, res) => {});
app.use("/", express.static("dist"));
app.get("/", (req, res) => {
	res.sendFile(path.join(__rootdir, "/dist/index.html"));
});
app.listen(8000, () => console.log("poopty doop"));

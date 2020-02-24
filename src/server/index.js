//--------------------------
//         Imports        |
//-------------------------
const express = require("express");
const mongo = require("mongodb").MongoClient;
const path = require("path");

const app = express();
const url = "mongodb://localhost:27017";

let db, users;
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
		db = client.db("layt");
		users = db.collection("users");
	}
);
//--------------------------
//       Server bs        |
//-------------------------
app.use(express.json());

//--------------------------
//          Routes        |
//-------------------------
app.post("/api/add-user", (req, res) => {
	const name = req.body.name;
	const pass = req.body.pass;
	users.insertOne({ name, pass }, (err, result) => {
		if (err) {
			console.error(err);
			res.status(500).json({ err });
			return;
		}
		console.log("received post from" + req.connection.localAddress);
		res.status(200).json({ ok: true });
	});
});
app.get("/api/users", (req, res) => {
	users.find().toArray((err, items) => {
		if (err) {
			console.error(err);
			res.status(500).json({ err: err });
			return;
		}
		res.status(200).json({ users: items });
	});
});
app.use("/", express.static("dist"));
app.get("/", (req, res) => {
	res.sendFile(path.resolve(__dirname, "/../../dist/index.html"));
});
app.listen(8000, () => console.log(`Un mesaj normal pe portul 8000`));

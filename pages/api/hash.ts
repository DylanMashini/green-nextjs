import bcrypt from "bcrypt";

export default function hash(req, res) {
	if (req.method != "POST") {
		res.status(405).send("Method not allowed");
		return;
	}
	if (!req.body.pass) {
		res.status(400).send("Missing parameter");
		return;
	}
	const hash = bcrypt.hashSync(req.body.pass, 12);
	console.log(hash);
	res.status(200).json({ hash: hash });
}

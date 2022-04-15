import bcrypt from "bcrypt";
export default function compare(req, res) {
	if (req.method != "POST") {
		res.status(405).send("Method not allowed");
		return;
	}
	if (!req.body.a || !req.body.b) {
		res.status(400).send("Missing parameter");
		return;
	}
	if (bcrypt.compareSync(req.body.a, req.body.b)) {
		res.status(200).json({ auth: true });
	} else {
		res.status(400).json({ auth: false });
	}
}

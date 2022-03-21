export default async function stats(req, res) {
  if (req.method === "POST") {
    console.log(req.cookies);
    try {
      if (!req.cookies.token) {
        res.status(403).send();
      } else {
        res.send({ msg: "it works" });
      }
    } catch (error) {
      console.error("Error occurred /stats,", error);
      res.status(500).send({ done: false, error: error?.message });
    }
  }
}

export default function login(req, res) {
  if (req.method === "POST") {
    try {
      res.status(200).json({ done: true });
    } catch (error) {
      console.error("Something went wrong loggin in", error);
      res.status(500).json({ done: false });
    }
  } else {
    res.send({ done: false });
  }
}

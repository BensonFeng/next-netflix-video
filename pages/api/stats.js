import jwt from "jsonwebtoken";
import { findVideoIdByUser } from "../../lib/db/hasura";
export default async function stats(req, res) {
  if (req.method === "POST") {
    console.log(req.cookies);
    try {
      const token = req.cookies.token;
      if (!token) {
        res.status(403).send();
      } else {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log({ decoded });
        res.send({ msg: "it works", decoded });
        userId = "ankyyyy";
        videoId = "4zH5iYM4wJo";

        const findVideoId = await findVideoIdByUser(token, userId, videoId);
        console.log({ findVideoId });
        res.send({ msg: "it works", decoded, findVideoId });
      }
    } catch (error) {
      console.error("Error occurred /stats,", error);
      res.status(500).send({ done: false, error: error?.message });
    }
  }
}

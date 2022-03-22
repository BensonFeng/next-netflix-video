import jwt from "jsonwebtoken";
import {
  findVideoIdByUser,
  updateStats,
  insertStats,
} from "../../lib/db/hasura";
export default async function stats(req, res) {
  if (req.method === "POST") {
    console.log(req.cookies);
    try {
      const token = req.cookies.token;
      if (!token) {
        res.status(403).send({});
      } else {
        const videoId = req.query.videoId;
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        res.send({ msg: "it works", decodedToken });
        userId = decodedToken.issuer;
        // videoId = "4zH5iYM4wJo";

        const findVideoId = await findVideoIdByUser(token, userId, videoId);
        if (findVideoId) {
          // update it
          const response = await updateStats(token, {
            watched: true,
            userId,
            videoId: "gxc6y2ZVfCU",
            favourited: 0,
          });
          res.send({ msg: "it works", updateStats: response });
        } else {
          // add it
          const response = await insertStats(token, {
            watched,
            userId,
            videoId,
            favourited,
          });
          res.send({ data: response });
        }
      }
    } catch (error) {
      console.error("Error occurred /stats,", error);
      res.status(500).send({ done: false, error: error?.message });
    }
  }
}

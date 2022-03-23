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
        const { videoId, favourited, watched = true } = req.body;
        if (videoId) {
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
          res.send({ msg: "it works", decodedToken });
          userId = decodedToken.issuer;

          const findVideo = await findVideoIdByUser(token, userId, videoId);
          const doesStatsExist = findVideo?.length > 0;
          if (doesStatsExist) {
            // update it
            const response = await updateStats(token, {
              watched,
              userId,
              videoId,
              favourited,
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
      }
    } catch (error) {
      console.error("Error occurred /stats,", error);
      res.status(500).send({ done: false, error: error?.message });
    }
  } else {
    try {
      const token = req.cookies.token;
      if (!token) {
        res.status(403).send({});
      } else {
        const { videoId } = req.body;
        if (videoId) {
          const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
          res.send({ msg: "it works", decodedToken });
          userId = decodedToken.issuer;

          const findVideo = await findVideoIdByUser(token, userId, videoId);
          const doesStatsExist = findVideo?.length > 0;
          if (doesStatsExist) {
            res.send(findVideo);
          } else {
            // add it
            res.status(404);
            res.send({ user: null, msg: "Video not found" });
          }
        }
      }
    } catch (error) {
      console.error("Error occurred /stats,", error);
      res.status(500).send({ done: false, error: error?.message });
    }
  }
}

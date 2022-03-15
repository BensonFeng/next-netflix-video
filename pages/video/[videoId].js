import { useRouter } from "next/router";

const Video = () => {
  const router = useRouter();
  const {
    query: { videoId },
  } = router;
  return <h1>dynamic video id: {videoId}</h1>;
};

export default Video;

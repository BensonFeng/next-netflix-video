import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";
import clsx from "classname";
Modal.setAppElement("#__next");
export async function getStaticProps() {
  const video = {
    title: "Cute dog",
    publishTime: "1990-01-01",
    description: "A big red dog, can he get any bigger?",
    channelTitle: "Paramount Pictures",
    viewCount: 100000,
  };
  // Call an external API endpoint to get posts.
  // You can use any data fetching library

  return {
    props: {
      video,
    },
    revalidate: 10,
  };
}
export async function getStaticPaths() {
  const listOfVideos = ["mYfJxlgR2jw", "4zH5iYM4wJo", "KCPEHsAViiQ"];

  return {
    paths: listOfVideos.map((videoId) => ({ params: { videoId } })),
    fallback: "blocking", // false or 'blocking'
  };
}

const Video = ({ video }) => {
  const router = useRouter();
  const { title, publishTime, description, channelTitle, viewCount } = video;
  const {
    query: { videoId },
  } = router;
  return (
    <h1 className={styles.container}>
      dynamic video id: {videoId}
      <Modal
        isOpen={true}
        contentLabel="Watch the video"
        onRequestClose={() => router.back()}
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <iframe
          id="ytplayer"
          className={styles.videoPlayer}
          type="text/html"
          width="100%"
          height="360"
          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&origin=http://example.com&controls=0&rel=1`}
          frameborder="0"
        ></iframe>
        <div className={styles.modalBody}>
          <div className={styles.modalBodyContent}>
            <div className={styles.col1}>
              <p className={styles.publishTime}>{publishTime}</p>
              <p className={styles.title}>{title}</p>
              <p className={styles.description}>{description}</p>
            </div>
            <div className={styles.col2}>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>Cast: </span>
                <span className={styles.channelTitle}>{channelTitle}</span>
              </p>
              <p className={clsx(styles.subText, styles.subTextWrapper)}>
                <span className={styles.textColor}>View Count: </span>
                <span className={styles.channelTitle}>{viewCount}</span>
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </h1>
  );
};
export default Video;

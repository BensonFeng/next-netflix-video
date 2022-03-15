import { useRouter } from "next/router";
import Modal from "react-modal";
import styles from "../../styles/Video.module.css";

Modal.setAppElement("#__next");

const Video = () => {
  const router = useRouter();
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
        <div>model body</div>{" "}
      </Modal>
    </h1>
  );
};
export default Video;

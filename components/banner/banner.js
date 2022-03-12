const Banner = (props) => {
  const { title, subTitle, imgUrl } = props;
  const handleOnPlay = () => {
    console.log("handle on play");
  };
  return (
    <div>
      <h1>{title}</h1>
      <h2>{subTitle}</h2>
      <button onClick={handleOnPlay}>Play</button>
      <div
        style={{
          backgroundImage: `url(${imgUrl})`,
          width: "100%",
          height: "100%",
          position: "absolute",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
        }}
      ></div>
    </div>
  );
};

export default Banner;

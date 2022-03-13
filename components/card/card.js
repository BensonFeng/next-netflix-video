import Image from "next/image";

const Cart = (props) => {
  const { imgUrl, size } = props;
  return (
    <div>
      <Image src={imgUrl} alt="image" width={300} height={300} />
    </div>
  );
};

export default Cart;

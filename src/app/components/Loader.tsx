import Image from "next/image";
import loader from "../assets/gifs/loader.gif";

const Loader = () => {
  return (
    <div className="w-full h-20 flex items-center justify-center pt-4">
      <Image src={loader} alt="Loader" className="w-7 h-7 object-cover" />
    </div>
  );
};

export default Loader;

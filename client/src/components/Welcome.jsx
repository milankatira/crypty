import { AiFillAccountBook } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";
import Loader from "./Loader";
const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray text-white";

const Welcome = () => {
  const connectWallet = () => {};

  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-3xl sm:text-5xl text-white text-gradient py-1">
            send crypto <br />
            across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/4 w-11/12 text-base">
            Explore Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Obcaecati autem veniam nemo!
          </p>

          <button
            type="button"
            onClick={() => connectWallet}
            className="flex flex-row justify-center items-center my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-orange-600 text-white font-bold"
          >
            Connect Wallet
          </button>

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={`rounded-tr-2xl ${commonStyles}`}>Reliability</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}>Web 3.0</div>
            <div className={commonStyles}>Low charges</div>
            <div className={`rounded-br-2xl ${commonStyles}`}>Web 3.0</div>
          </div>

        </div>

        <div>
            
        </div>
      </div>
    </div>
  );
};

export default Welcome;

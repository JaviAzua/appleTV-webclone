import { useState } from "react";
import { IoIosPause, IoIosPlay } from "react-icons/io";

export const DownButtons = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <aside className=" w-full relative text-center">
      <button className="text-white hover:text-white/80 mt-6 mb-10 py-3 px-6 border-white hover:border-white/80 border-2 rounded-full">{`See full lineup >`}</button>
      <button
        onClick={() => {
          setIsPlaying(!isPlaying);
        }}
        className="text-white mb-1 absolute bottom-12 right-5 md:right-11 p-2 rounded-full border-white border-2"
      >
        {isPlaying ? <IoIosPause /> : <IoIosPlay />}
      </button>
    </aside>
  );
};

import { motion } from "framer-motion";
import { SmallVideoCarousel } from "./SmallVideoCarousel";

type Props = {
  randomMoviesSet1: {
    poster: string;
    name: string;
  }[];
  randomMoviesSet2: {
    poster: string;
    name: string;
  }[];
};

export const SamllCarousel = ({
  randomMoviesSet1,
  randomMoviesSet2,
}: Props) => {
  return (
    <motion.div
      variants={{
        active: { opacity: 1, y: 0 },
        inactive: { opacity: 0, y: 20 },
      }}
      transition={{
        duration: 0.4,
      }}
      className="-mt-[calc((100vh-(300px*(16/9)))/2)] pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
    >
      <SmallVideoCarousel movies={randomMoviesSet1} />
      <div className="[--duration:25s] [--carousel-offset:-32px]">
        <SmallVideoCarousel movies={randomMoviesSet2} />
      </div>
    </motion.div>
  );
};

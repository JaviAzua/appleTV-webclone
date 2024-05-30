import { Button } from "../../Button";
import { useMemo } from "react";
import { useWindowSize } from "react-use";
import { motion, MotionValue, useTransform } from "framer-motion";
import { FaPlayCircle } from "react-icons/fa";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

type Props = {
  carouselWrapperRef: React.RefObject<HTMLDivElement>;
  scrollYProgress: MotionValue<number>;
  movies: {
    poster: string;
    name: string;
  }[];
};

export const BigCarousel = ({
  carouselWrapperRef,
  scrollYProgress,
  movies,
}: Props) => {
  const { height, width } = useWindowSize();

  const maximumScale = useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.5, maximumScale, 1]
  );

  const posterOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);

  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-20, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [20, 0]
  );

  return (
    <div
      ref={carouselWrapperRef}
      className="overflow-clip mt-[-100vh] h-[300vh]"
    >
      <div className="sticky top-0 flex h-screen items-center">
        <div className="relative left-1/2 mb-5 flex -translate-x-1/2 gap-5">
          <motion.div
            style={{
              opacity: posterOpacity,
              x: posterTranslateXLeft,
            }}
            className="aspect-[9/16] md:aspect-video shrink-0 w-[300px] md:w-[60vw] rounded-2xl overflow-clip"
          >
            <img
              id="lImage"
              className="w-full h-full object-cover opacity-50 transition-opacity duration-300"
              src={movies[0].poster}
              alt={movies[0].name}
            />
          </motion.div>
          <motion.div
            style={{
              scale,
            }}
            className="shrink-0 relative w-[300px] md:w-[60vw] aspect-[9/16] md:aspect-video rounded-2xl overflow-clip"
          >
            <img
              className="w-full h-full object-cover"
              src={movies[1].poster}
              alt={movies[0].name}
            />
            <motion.div
              variants={{
                active: { opacity: 1 },
                inactive: { opacity: 0 },
              }}
              className="absolute flex flex-col md:flex-row gap-4 md:gap-0 md:justify-around items-center p-5 text-white text-lg left-0 bottom-0 w-full"
            >
              <p className="text-base font-bold">
                Genre ·{" "}
                <span className="font font-light text-sm">
                  A little resume.
                </span>
              </p>
              <Button className="font-bold flex gap-2 items-center">
                Watch now
                <FaPlayCircle className="size-[0.8rem]" />
              </Button>
            </motion.div>
          </motion.div>
          <motion.div
            style={{
              opacity: posterOpacity,
              x: posterTranslateXRight,
            }}
            className="aspect-[9/16] md:aspect-video shrink-0 w-[300px] md:w-[60vw] rounded-2xl overflow-clip"
          >
            <img
              id="rImage"
              className="w-full h-full object-cover opacity-50 transition-opacity duration-300"
              src={movies[2].poster}
              alt={movies[0].name}
            />
          </motion.div>
        </div>
        <motion.div
          style={{
            opacity: posterOpacity,
          }}
          className="text-white text-xl absolute w-full"
        >
          <ul className="flex justify-between px-8">
            <li>
              <button
                onMouseEnter={() => {
                  document
                    .getElementById("lImage")
                    ?.classList.add("opacity-100");
                }}
                onMouseLeave={() => {
                  document
                    .getElementById("lImage")
                    ?.classList.remove("opacity-100");
                }}
              >
                <MdArrowBackIos className="size-8 md:size-14 opacity-50 " />
              </button>
            </li>
            <li>
              <button
                onMouseEnter={() => {
                  document
                    .getElementById("rImage")
                    ?.classList.add("opacity-100");
                }}
                onMouseLeave={() => {
                  document
                    .getElementById("rImage")
                    ?.classList.remove("opacity-100");
                }}
              >
                <MdArrowForwardIos className="size-8 md:size-14 opacity-50" />
              </button>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

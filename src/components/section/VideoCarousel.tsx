import {
  useScroll,
  useTransform,
  motion,
  useMotionValueEvent,
} from "framer-motion";
import {
  Movie,
  movies,
  randomMoviesSet1,
  randomMoviesSet2,
} from "../../movies";
import { useMemo, useRef, useState } from "react";
import { useWindowSize } from "react-use";
import { Button } from "../Button";

export const VideoCarousel = () => {
  const { height, width } = useWindowSize();
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });
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
  const [carouselVariant, setCarouselVariant] = useState<"inactive" | "active">(
    "inactive"
  );

  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <motion.div animate={carouselVariant} className="bg-background pb-16">
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
                className="w-full h-full object-cover"
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
                className="absolute flex flex-col md:flex-row gap-4 md:gap-0 md:justify-between items-center p-5 text-white text-lg left-0 bottom-0 w-full"
              >
                <p>Best video title</p>
                <Button>Watch now</Button>
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
                className="w-full h-full object-cover"
                src={movies[2].poster}
                alt={movies[0].name}
              />
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        variants={{
          active: { opacity: 1, y: 0 },
          inactive: { opacity: 0, y: 20 },
        }}
        transition={{
          duration: 0.4,
        }}
        className="-mt-[calc((100vh-(300px*(16/9)))/2)] space-y-3 pt-4 md:-mt-[calc((100vh-(60vw*(9/16)))/2)]"
      >
        <SmallVideoCarousel movies={randomMoviesSet1} />
        <div className="[--duration:68s] [--carousel-offset:-32px]">
          <SmallVideoCarousel movies={randomMoviesSet2} />
        </div>
      </motion.div>
    </motion.div>
  );
};

const SmallVideoCarousel = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="overflow-clip">
      <div className="flex gap-3 relative animate-carousel-move left-[var(--carousel-offset,0px)]">
        {movies.map((movie, index) => (
          <div
            className="w-[40vw] md:w-[23vw] aspect-video shrink-0"
            key={`${movie.name}-${index}`}
          >
            <img
              className="w-full h-full object-cover rounded-xl"
              src={movie.poster}
              alt={movie.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

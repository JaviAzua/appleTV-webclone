import { useRef, useState } from "react";
import { useScroll, motion, useMotionValueEvent } from "framer-motion";
import { movies, randomMoviesSet1, randomMoviesSet2 } from "../../../movies";

import { BigCarousel } from "./BigCarousel";
import { SamllCarousel } from "./SmallCarousel";
import { DownButtons } from "./DownButtons";

export const VideoCarousel = () => {
  const carouselWrapperRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });
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
    <motion.div animate={carouselVariant} className="bg-background">
      <BigCarousel
        scrollYProgress={scrollYProgress}
        carouselWrapperRef={carouselWrapperRef}
        movies={movies}
      />

      <SamllCarousel
        randomMoviesSet1={randomMoviesSet1}
        randomMoviesSet2={randomMoviesSet2}
      />
      <DownButtons />
    </motion.div>
  );
};

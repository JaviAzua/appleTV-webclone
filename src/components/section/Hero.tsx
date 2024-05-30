import { Button } from "../Button";
import { Container } from "../Container";
import { SiAppletv } from "react-icons/si";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <div className="relative text-white bg-background">
      <motion.div
        ref={videoContainerRef}
        style={{ opacity }}
        className="absolute -top-[--header-height] left-0 w-full h-[200vh]"
      >
        <img
          className="sticky top-0 h-screen w-full object-cover"
          src="/posters/napoleon.webp"
        />
      </motion.div>
      <Container className="pb-7 relative z-10 h-[--hero-height]">
        <motion.div
          className="flex flex-col p-10 justify-end items-start h-full"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          whileInView="visible"
          exit="hidden"
          animate="hidden"
          viewport={{ amount: 1 }}
        >
          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: [0, 0, 0.3, 1],
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
            className="text-4xl md:text-5xl font-bold mb-10 text-whiteText"
          >
            All Apple Originals.
            <br /> Only on Apple TV+.
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: [0, 0, 0.3, 1],
              y: 0,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
          >
            <Button className="mb-16 font-semibold" size="large">
              Stream now
            </Button>
            <p className="flex gap-1 items-center font-semibold">
              Watch on the
              <span>
                <SiAppletv className="size-10" />
              </span>
              app.
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

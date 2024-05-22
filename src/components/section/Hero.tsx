import { Button } from "../Button";
import { Container } from "../Container";
import { SiAppletv } from "react-icons/si";

export const Hero = () => {
  return (
    <div className="relative h-[300vh] text-white bg-background">
      <div className="absolute inset-0 ">
        <img src="/posters/napoleon.webp" />
      </div>
      <Container className="pb-7 relative z-10 min-h-[--hero-height] flex flex-col justify-end items-start">
        <h1 className="text-5xl font-bold mb-10">
          All Apple Originals.
          <br /> Only on Apple TV+.
        </h1>
        <Button className="mb-16" size="large">
          Stream now
        </Button>
        <p className="flex gap-1 items-center font-semibold">
          Watch on the
          <span>
            <SiAppletv className="size-10" />
          </span>
          app.
        </p>
      </Container>
    </div>
  );
};

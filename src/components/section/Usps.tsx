import { Button } from "../Button";
import { Container } from "../Container";
import Fadein from "../Fade-in";

type packageType = {
  title: string;
  subtitle: string;
  text: string;
  buttonLabel: string;
  buttonLink?: string;
  linkLabel?: string;
};

function Usps() {
  const packages = [
    {
      title: "Buy an Apple device",
      subtitle: "3 months free.",
      text: "Apple TV+ is included for 3 months when you purchase an Apple device and redeem the offer within 90 days.",
      buttonLabel: "Check eligibility",
      buttonLink: "/",
    },
    {
      title: "Free 7-day trial",
      subtitle: "$9.99/mo.",
      text: "A monthly subscription is just $9.99 per month after a free 7-day trial.3 Share Apple TV+ with your family.",
      buttonLabel: "Try it free",
      buttonLink: "/",
    },
    {
      title: "Free 1‑month trial",
      subtitle: "Apple One",
      text: "Bundle Apple TV+ with up to five other great services for one low monthly price. And enjoy more for less.",
      buttonLabel: "Try Apple One free",
      linkLabel: "Learn more",
      buttonLink: "/",
    },
  ];
  return (
    <Container className="max-w-[692px] z-10 relative py-36 text-whiteText text-4xl font-bold ">
      <div className="space-y-12 pb-[150px]">
        <Fadein>
          <p>New Apple Originals every month — always ad‑free.</p>
        </Fadein>
        <Fadein>
          <p>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </p>
        </Fadein>
        <Fadein>
          <p>Watch in 4K HDR video with immersive Spatial Audio</p>
        </Fadein>
        <Fadein>
          <p>Share a single subscription with up to five people.</p>
        </Fadein>
      </div>
      <Fadein>
        <div className="flex pb-42">
          {packages.map((pkge) => (
            <PackageCard
              text={pkge.text}
              buttonLabel={pkge.buttonLabel}
              subtitle={pkge.subtitle}
              title={pkge.title}
              key={pkge.title}
              linkLabel={pkge.linkLabel}
            />
          ))}
        </div>
      </Fadein>
    </Container>
  );
}

export default Usps;

const PackageCard = ({
  buttonLabel,
  subtitle,
  title,
  text,
  linkLabel,
}: packageType) => {
  return (
    <div className="h-[263] flex flex-col items-start justify-between">
      <h2 className="text-lg">{title}</h2>
      <h3 className="text-3xl mt-3">{subtitle}</h3>
      <p className="text-base max-w-[90%] text-grey font-normal mt-1 mb-6">
        {text}
        <br />
        {linkLabel && (
          <a className="flex gap-3">
            <span className="">{linkLabel}</span>
            <span>{">"}</span>
          </a>
        )}
      </p>
      <Button className="px-6 tracking-wide" size="medium">
        {buttonLabel}
      </Button>
    </div>
  );
};

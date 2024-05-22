import { Button } from "./Button";
import { Container } from "./Container";

import { FaApple } from "react-icons/fa";
import { IoBagOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";

export const Header = () => {
  const menuItems = [
    "Store",
    "Mac",
    "iPad",
    "iPhone",
    "Watch",
    "Vision",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];
  return (
    <>
      <header className="bg-backgroundContrast">
        <Container className="flex items-center justify-between min-h-11">
          <a href="/" className="-ml-6 menuItem px-4">
            <FaApple className="size-6 md:size-5" />
            <span className="sr-only">Back to homepage</span>
          </a>

          {menuItems.map((item) => (
            <a
              className="text-xs menuItem hidden md:flex text-nowrap"
              href="/"
              key={item}
            >
              {item}
            </a>
          ))}
          <div className="flex items-center gap-5">
            <a href="/" className="menuItem">
              <IoMdSearch className="size-6 md:size-4" />
              <span className="sr-only">Search</span>
            </a>
            <a href="/" className="menuItem">
              <IoBagOutline className="size-6 md:size-4" />
              <span className="sr-only">Cart</span>
            </a>
          </div>
        </Container>
      </header>
      <div className="sticky top-0 bg-backgroundContrast text-white ">
        <Container className="flex justify-between items-center min-h-11">
          <p className="text-xl font-semibold">Apple TV+</p>
          <Button size="small">Stream Now</Button>
        </Container>
      </div>
    </>
  );
};

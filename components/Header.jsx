import Link from "next/link";

//components
import Nav from "./Nav";
import { Button } from "./ui/button";
import MobileNav from "./MobileNav";
import Social from "./Social";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            CD<span className="text-accent-hover">.</span>
          </h1>
        </Link>
        {/* desktop */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          {/* <Link href="/contact">
            <Button>Contacto</Button>
          </Link> */}
        </div>
        <div className="hidden xl:flex items-center gap-8">
          <div className="mb-8 xl:mb-0">
            <Social
              containerStyles="flex gap-6"
              iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent-hover hover:bg-accent hover:text-primary hover:transition-all duration-500"
            />
          </div>
        </div>
        {/* mobile */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

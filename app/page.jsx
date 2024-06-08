import Photo from "@/components/Photo";
import Social from "@/components/social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1>
              <span className="text-xl">Desarrollador de Software</span>
            </h1>
            <h2 className="h2">
              Hola soy <br />
              <span className="text-accent">Carlos Domínguez</span>
            </h2>
            <p className="max-w-[500px] mb-9 text-white/75">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              eveniet reiciendis quas quaerat illo atque, animi ab porro
              repellat. Facilis explicabo dolorem minima. Debitis quam fugit
              iusto mollitia, quia corrupti?
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                varian="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Ver CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

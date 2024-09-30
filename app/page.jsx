"use client";

import { HackerEffectText } from "@nekzus/react-hacker-effect";
import { ReactTyped } from "react-typed";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-10">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="flex">
              <span className="text-3xl text-accent">
                Desarrollador 
              </span>
                <ReactTyped
                  strings={[
                    'Web',
                    'Mobile',
                    'Full Stack',
                  ]}
                  typeSpeed={90}
                  backSpeed={60}
                  loop
                  className="text-3xl text-accent pl-3"
                />
              
            </h1>
            <h2 className="h2">
              <HackerEffectText initialValue="Hola, soy">
                <div>Hola, soy</div>
              </HackerEffectText>
              <HackerEffectText
                initialValue="Carlos Domínguez"
                targetValue="Web & Mobile Dev"
                uppercase
              >
                <span className="text-accent-hover">Carlos Domínguez</span>
              </HackerEffectText>
            </h2>
            <p className="max-w-[500px] mb-9 text-white/75">
              Soluciones web y móviles a la medida de tu negocio. Desde
              aplicaciones robustas hasta experiencias de usuario innovadoras,
              te ayudo a crecer en el mundo digital. ¡Tu visión, mi código!
            </p>
            {/* btn and social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                varian="outline"
                size="lg"
                className="uppercase flex items-center gap-2 hover:scale-105"
              >
                <span>Ver CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="xl:hidden mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent-hover hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

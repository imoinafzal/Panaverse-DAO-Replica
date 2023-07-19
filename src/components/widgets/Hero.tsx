import Image from "next/image";
import Wrapper from "@/components/shared/Wrapper";
import HeroPoster from "@/assets/images/hero-poster.webp";
import Button from "@/components/shared/Button";

const Hero = () => {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col gap-4 md:flex-row items-center">
          {/* Left */}
          <div className="basis-1/2">
            <h4 className="text-[#03616C] mt-4 text-lg font-semibold">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="mt-2 text-4xl sm:text-5xl font-bold">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="mt-2 text-xl text-slate-600">
              Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI),
              Cloud, Edge, Ambient Computing/IoT, Network Automation, and
              Bioinformatics Technologies
            </p>
            <div className="mt-6">
              <Button text={"Learn More"}/>
            </div>
          </div>

          {/* Right */}
          <div className="basis-1/2">
            <Image src={HeroPoster} alt="Hero Image" />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;

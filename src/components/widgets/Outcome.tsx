import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import OutcomeImage from "@/assets/images/outcome-poster.webp";
import { BsCheckSquareFill } from "react-icons/bs";

const outcomePoints = [
  "Product Ownership",
  "Freelancing",
  "Global Market by Panaverse DAO",
  "Boosting Economy",
];

const Outcome = () => {
  return (
    <section className="mt-16 md:mt-28">
      <Wrapper>
        <div className="flex flex-col-reverse md:flex-row gap-x-8 gap-y-10 items-center">
          {/* Left */}
          <div className="flex-1">
            <Image src={OutcomeImage} alt="Outcome Image" />
          </div>

          {/* Right */}
          <div className="flex-1">
            <h2 className="font-semibold text-5xl">
              The Outcome for Participants of the Program
            </h2>
            <p className="mt-6 text-slate-700 text-lg">
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan's software exports.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-8">
              {outcomePoints.map((item, index) => (
                <div key={index}>
                  <h3 className="flex gap-x-4 items-center text-sm font-medium">
                    <BsCheckSquareFill size={25} />
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Outcome;

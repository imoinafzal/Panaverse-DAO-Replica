"use client";
import React, { useState } from "react";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import QuarterBox from "../shared/QuarterBox";
import { SpecialTrackData } from "../shared/SpecialTracksData";
import {HiArrowRight} from "react-icons/hi"

const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");
  const selectedItemData = SpecialTrackData.find(
    (item) => item.slug === selectedItem
  );
  console.log(selectedItem);

  return (
    <section>
      <Wrapper>
        {/* Top */}
        <div>
          <h2 className="font-semibold text-5xl">Specialized Tracks:</h2>
          <p className="mt-2 text-xl text-slate-600 max-w-screen-sm">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each.
          </p>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          {/* Left */}
          <div className="basis-2/3 self-start sticky top-28 border rounded-xl shadow-xl border-slate-300 py-8 px-8 ">
            <h4 className="text-primary text-lg font-medium">
              Specialized Track
            </h4>
            <h2 className="text-2xl font-bold">{selectedItemData?.header}</h2>
            <p className="text-lg text-slate-600 mt-3">
              {selectedItemData?.description}
            </p>
            <button className="flex items-center gap-x-2 text-primary bg-white border border-[#03616C] hover:shadow-lg hover:scale-105 duration-300 hover:bg-teal-200 rounded-md text-lg px-8 py-4 mt-4">
              Learn More
              <HiArrowRight size={20}/>
            </button>
            <div className="flex flex-col md:flex-row gap-4 mt-6">
              {selectedItemData?.quarters.map((item, index) => (
                <QuarterBox
                  key={index}
                  header={item.header}
                  description={item.description}
                  number={item.number}
                  haveBorder={false}
                />
              ))}
            </div>
          </div>

          {/* Right */}
          <div className="basis-1/3 px-2 py-6 space-y-6">
            {SpecialTrackData.map((item) => (
              <div
                onClick={() => setSelectedItem(item.slug)}
                key={item.slug}
                className="flex items-center gap-x-4 cursor-pointer"
              >
                <div className="flex-shrink-0 h-24 w-36">
                  <Image
                    src={item.image}
                    alt="Metaverse Image"
                    className={"h-24 object-cover rounded-md"}
                  />
                </div>
                <div>
                  <h4 className="text-primary font-medium">
                    Specialized Track
                  </h4>
                  <h3 className="text-[16px] font-bold">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;

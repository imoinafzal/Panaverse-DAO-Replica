import Button from "../shared/Button";
import Wrapper from "../shared/Wrapper";
import { coreTracksData } from "../shared/CoreTracksData";
import QuarterBox from "../shared/QuarterBox";

const CoreTracks = () => {
  const header = "Core Courses \n (Common in All Specializations):";
  return (
    <section className="mt-16 lg:mt-28">
      <Wrapper>
        {/* Content */}
        <div className="max-w-screen-md">
          <h4 className="text-[#03616C] text-lg font-semibold">
            Program of Studies
          </h4>
          <h2 className="mt-2 text-3xl sm:text-4xl font-bold whitespace-pre-line">
            {header}
          </h2>
          <p className="mt-6 text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses
          </p>
          <div className="mt-6">
            <Button text={"Enroll Now"} />
          </div>
        </div>

        {/* Boxes */}
        <div className="my-20 flex flex-col md:flex-row gap-x-8 gap-y-6">
          {coreTracksData.map((item) => (
            <QuarterBox
              key={item.number}
              header={item.header}
              description={item.description}
              number={item.number} 
            />
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default CoreTracks;

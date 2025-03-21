import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React from "react";

const Discover = () => {
  return (
    <section className="flex flex-col lg:flex-row items-start  my-14 px-[4vw] lg:justify-center lg:px-0 text-[#020615]">
      <div className="lg:max-w-[40vw]">
        <h5 className="capitalize font-bold text-lg text-[#560ce3] font-[caveat] mb-3">Dream Your Next Trip</h5>
        <h2 className="capitalize mb-4 text-3xl font-bold">
          discover when even
          <br /> you want to go
        </h2>
        <p className="mb-4">
          Are you tired of the typical tourist destinations and looking to step out of your comfort zone? Adventure travel may be
          the perfect solution for you! Here are four.
        </p>

        <ChooseList
          imageLink={`/icons/globe.png`}
          title="Best Travel Agency"
          content="Are you tired of the typical tourist destinatio and looking step out of your comfort."
        />
        <ChooseList
          imageLink={`/icons/suitcase.png`}
          title="Secure Journey With Us"
          content="Are you tired of the typical tourist destinatio and looking step out of your comfort."
        />
      </div>

      <div className="flex flex-col justify-center mx-auto items-center md:flex-row bg-amber-200  md:items-start lg:justify-center lg:max-w-[30vw] lg:relative ">
        <Image
          src={`https://seasons.jdprojects.in/assets/img/chose/chose-2.jpg`}
          alt=""
          width={300}
          height={300}
          className="rounded-2xl mx-6 lg:mx-0 lg:relative  lg:left-1/2"
        />
        <Image
          src={`https://seasons.jdprojects.in/assets/img/chose/chose.png`}
          alt=""
          width={300}
          height={300}
          className="my-6 mx-6 md:mt-0 lg:mx-0 lg:relative lg:top-[50px] lg:right-3/4"
        />
      </div>
    </section>
  );
};

export default Discover;

type ChooseList = {
  imageLink: string | StaticImport;
  title: string;
  content: string;
};
const ChooseList = ({ imageLink, title, content }: ChooseList) => {
  return (
    <div className="flex items-start  py-3">
      <Image className="mr-2" src={imageLink} width={90} height={30} alt="" style={{ objectFit: "contain", height: "auto" }} />

      <div className="text-[#020615]">
        <h4 className="mb-1 font-bold text-xl"> {title}</h4> <p className="text-lg text-[#29292b]">{content}</p>
      </div>
    </div>
  );
};

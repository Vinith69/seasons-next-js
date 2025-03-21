"use client";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import "./css/homepage.css";

const Discover = () => {
  return (
    <section className="discover-section">
      <section className=" max-w-6xl mx-auto my-14 px-4 text-[#020615]">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8">
          {/* LEFT: Text Content */}
          <div className="lg:w-1/2 lg:mr-4">
            <h5 className="capitalize font-bold text-lg text-[#560ce3] font-[caveat] mb-3">Dream Your Next Trip</h5>
            <h2 className="capitalize mb-4 text-3xl font-bold">
              Discover When Even
              <br /> You Want To Go
            </h2>
            <p className="mb-4">
              Are you tired of the typical tourist destinations and looking to step out of your comfort zone? Adventure travel may
              be the perfect solution for you! Here are four.
            </p>

            <ChooseList
              imageLink="/icons/globe.png"
              title="Best Travel Agency"
              content="Are you tired of the typical tourist destinatio and looking step out of your comfort."
            />
            <ChooseList
              imageLink="/icons/suitcase.png"
              title="Secure Journey With Us"
              content="Are you tired of the typical tourist destinatio and looking step out of your comfort."
            />
          </div>

          {/* RIGHT: Images */}
          <div className="flex-1 lg:ml-4">
            {/* Mobile/Tablet: stacked images */}
            <div className="flex flex-col  items-center  space-y-6 md:flex-row md:mx-auto lg:hidden">
              <Image
                src="https://seasons.jdprojects.in/assets/img/chose/chose-2.jpg"
                alt="300x300"
                width={300}
                height={300}
                className="rounded-2xl md:mx-auto"
              />
              <Image
                src="https://seasons.jdprojects.in/assets/img/chose/chose.png"
                alt="449x547"
                width={300}
                height={300}
                className="rounded-2xl md:mx-auto"
              />
            </div>

            {/* Desktop: overlapping images */}
            <div className="hidden lg:block relative w-[449px] h-[547px] mx-auto">
              {/* Bigger Image (base) */}
              <Image
                src="https://seasons.jdprojects.in/assets/img/chose/chose-2.jpg"
                alt="449x547"
                fill
                className="rounded-2xl object-cover"
              />
              {/* Smaller Image (overlapped) */}
              <div className="absolute top-1/2 -left-1/6 -translate-y-1/2">
                <Image
                  src="https://seasons.jdprojects.in/assets/img/chose/chose.png"
                  alt="300x300"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Discover;

type ChooseListProps = {
  imageLink: string | StaticImport;
  title: string;
  content: string;
};

const ChooseList = ({ imageLink, title, content }: ChooseListProps) => {
  return (
    <div className="flex items-start py-3">
      <Image src={imageLink} alt="" width={50} height={50} className="mr-3" style={{ objectFit: "contain", height: "auto" }} />
      <div>
        <h4 className="mb-1 font-bold text-xl">{title}</h4>
        <p className="text-lg text-[#29292b]">{content}</p>
      </div>
    </div>
  );
};

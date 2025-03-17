import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import "./css/homepage.css";

const AboutUs = () => {
  return (
    <section
      className="aboutSection px-4 py-4 w-full md:flex md:items-center md:justify-center font-[outfit] text-[#020615]"
      data-background="url(https://seasons.jdprojects.in/assets/img/about/su/right-shape.png)"
    >
      <div className="my-6">
        <Image
          src={`https://seasons.jdprojects.in/assets/img/about/su/thumb.png`}
          alt="about-main-image"
          width={390}
          height={445}
        />
      </div>
      <div className="md:w-1/2 md:px-4 lg:px-20">
        <div>
          <h5 className="font-medium text-center bg-[#f5efff] text-[#560ce3] rounded-sm w-28 h-7 capitalize mb-4">Who are we</h5>
          <h2 className="capitalize  font-bold text-4xl mb-4">Here is Great opportunity for adventure & travels</h2>
          <p className="mb-2.5 text-lg">
            Dorem ipsum dolor sit amet consectetur adipiscing elit. Mauris nullam the Lorem
            {/* <br /> */}
            ipsum dolor sit amet consectetur adipiscing elit. consectetur adipiscing elit.
            {/* <br /> */}
            Mauris nullam the Lorem ipsum dolor
          </p>
        </div>

        <div className="flex flex-wrap items-end">
          <AboutIconWithText
            imageLink={`https://seasons.jdprojects.in/assets/img/about/su/fun-3.png`}
            title={"5,000+"}
            subTitle={"Top Destination"}
          />
          <AboutIconWithText
            imageLink={`https://seasons.jdprojects.in/assets/img/about/su/fun-2.png`}
            title={"2000+"}
            subTitle={"Top Destination"}
          />
          <AboutIconWithText
            imageLink={`https://seasons.jdprojects.in/assets/img/about/su/fun-1.png`}
            title={"100+"}
            subTitle={"Top Destination"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

type AboutIconWithText = {
  imageLink: string | StaticImport;
  alt?: string;
  title: String;
  subTitle: String;
};

const AboutIconWithText = ({ imageLink, alt = "about-icon", title, subTitle }: AboutIconWithText) => {
  return (
    <div className="px-4 flex flex-col justify-center items-center my-4">
      <Image src={imageLink} alt={alt} width={70} height={70} />
      <h3 className="text-3xl font-bold mt-2">{title}</h3>
      <span className="text-lg text-[#353844]">{subTitle}</span>
    </div>
  );
};

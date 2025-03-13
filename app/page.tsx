import Nav from "@/components/Nav";
import Image from "next/image";
import "./homepage.css";

export default function Home() {
  return (
    <>
      <section
        className="hero-section h-[75vh] flex flex-col items-center "
        data-background="url(https://seasons.jdprojects.in/assets/img/hero/tu/banner.jpg)"
      >
        <Nav />
        <div className="text-center self-center my-auto">
          <h2 className="text-white text-5xl font-bold mb-1">Where Every Journey</h2>
          <h3 className="text-white text-4xl font-bold">Become an Adventure</h3>

          <div className="bg-white rounded-full w-[60vw] h-12 mt-8"></div>
        </div>
      </section>
      <main>Hi</main>
    </>
  );
}

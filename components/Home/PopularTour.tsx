import "./css/homepage.css";

export default function PopularTour() {
  return (
    <section
      className="relative flex items-center justify-center h-[90vh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("https://seasons.jdprojects.in/assets/img/banner/banner.png")`,
      }}
    >
      {/* Optional overlay for darkening/lightening the background */}
      <div className="absolute inset-0 bg-black opacity-20" />

      {/* Main Content */}
      <div className="relative z-10 text-center text-white px-4">
        <p className="text-sm md:text-xl font-[caveat] font-medium mb-1">Next Adventure Destination</p>
        <h1 className="text-2xl md:text-5xl font-bold mb-4">
          Popular Travel Destinations
          <br className="hidden md:block" />
          Available Worldwide
        </h1>
        <button className="bg-[#f0e9ff] hover:bg-[#560ce3] text-[#560ce3] hover:text-white text-sm cursor-pointer font-semibold px-6 py-3 rounded-sm transition-all duration-300">
          BOOK YOUR TRIP NOW
        </button>
      </div>

      {/* "Explore the World" at the bottom, centered and single line */}
      <h2 className="tg-banner-2-big-title-h2 absolute bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        Explore the World
      </h2>
    </section>
  );
}

import Nav from "@/components/Nav";
import Image from "next/image";
import "./homepage.css";
import SearchBox from "@/components/SearchBox";
import AboutUs from "@/components/Home/AboutUs";
import HotelList from "@/components/Home/HotelList";

export default function Home() {
  return (
    <>
      <section
        className="hero-section flex flex-col items-center "
        data-background="url(https://seasons.jdprojects.in/assets/img/hero/tu/banner.jpg)"
      >
        <Nav />
        <div className="flex flex-col items-center justify-center text-center self-center my-auto min-h-[100vh] md:min-h-[90vh] md:py-[20vh]">
          <h2 className="text-white text-3xl md:text-6xl font-bold mb-2">Where Every Journey</h2>
          <h3 className="text-white text-2xl md:text-5xl font-bold mb-2">Become an Adventure</h3>

          <div className="md:flex items-end mt-4 space-x-3 ml-4">
            <Image src={`https://seasons.jdprojects.in/assets/img/hero/tu/avatar.png`} alt="avatar" width={230} height={50} />
            <p className="capitalize text-white text-[18px] font-bold  underline md:text-start">
              35k people booked <br /> Dream place
            </p>
            <svg
              className="hidden md:block"
              width="176"
              height="47"
              viewBox="0 0 176 47"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.2 7.99977C0.2 10.6507 2.34903 12.7998 5 12.7998C7.65097 12.7998 9.8 10.6507 9.8 7.99977C9.8 5.3488 7.65097 3.19977 5 3.19977C2.34903 3.19977 0.2 5.3488 0.2 7.99977ZM171.655 46.8313C172.114 47.022 172.64 46.8045 172.831 46.3454L175.938 38.8651C176.129 38.4061 175.911 37.8794 175.452 37.6887C174.993 37.4981 174.467 37.7156 174.276 38.1746L171.514 44.8238L164.865 42.0618C164.406 41.8712 163.879 42.0887 163.689 42.5477C163.498 43.0068 163.715 43.5335 164.174 43.7241L171.655 46.8313ZM5.25268 8.86357C5.86624 8.68409 6.48787 8.50783 7.11731 8.33483L6.64027 6.5992C6.0016 6.77473 5.37053 6.95367 4.74732 7.13596L5.25268 8.86357ZM10.9388 7.34766C12.198 7.04219 13.4836 6.74895 14.794 6.46825L14.4169 4.70818C13.0914 4.99215 11.7899 5.28897 10.5144 5.5984L10.9388 7.34766ZM18.6405 5.69357C19.9143 5.45278 21.2083 5.2233 22.5209 5.00537L22.2261 3.22968C20.9006 3.44974 19.5935 3.68155 18.3061 3.92489L18.6405 5.69357ZM26.4308 4.39835C27.7191 4.21188 29.0229 4.03616 30.3411 3.87141L30.1179 2.08531C28.7884 2.25147 27.473 2.42874 26.173 2.61692L26.4308 4.39835ZM34.2545 3.41905C35.5551 3.28069 36.8679 3.15277 38.1916 3.03546L38.0327 1.24249C36.6986 1.36071 35.3753 1.48966 34.0641 1.62915L34.2545 3.41905ZM42.1291 2.72024C43.432 2.62694 44.7442 2.54379 46.0644 2.47093L45.9652 0.673669C44.6353 0.747057 43.3134 0.830832 42.0005 0.924837L42.1291 2.72024ZM50.0167 2.28468C51.3255 2.23346 52.641 2.1923 53.9622 2.16134L53.92 0.361835C52.5894 0.393013 51.2645 0.434469 49.9463 0.486055L50.0167 2.28468ZM57.9102 2.09948C59.2248 2.08905 60.544 2.08871 61.8667 2.09861L61.8802 0.298661C60.5482 0.288691 59.2198 0.28903 57.8959 0.299533L57.9102 2.09948ZM65.8116 2.15842C67.126 2.18844 68.4429 2.22861 69.7614 2.27908L69.8302 0.480398C68.5025 0.429573 67.1763 0.389115 65.8527 0.358886L65.8116 2.15842ZM73.7083 2.46086C75.022 2.53162 76.3362 2.6127 77.6501 2.70424L77.7752 0.908592C76.4518 0.81639 75.1281 0.734727 73.8051 0.663463L73.7083 2.46086ZM81.5885 3.01027C82.9008 3.12285 84.2117 3.24603 85.5204 3.37994L85.7036 1.58929C84.385 1.45437 83.0643 1.33027 81.7424 1.21685L81.5885 3.01027ZM89.4468 3.81494C90.7544 3.971 92.0588 4.138 93.359 4.31607L93.6032 2.53271C92.2926 2.35322 90.9779 2.1849 89.6601 2.02762L89.4468 3.81494ZM97.2704 4.88737C98.5741 5.08985 99.8725 5.30374 101.165 5.5292L101.474 3.75599C100.171 3.52857 98.8612 3.31286 97.5467 3.1087L97.2704 4.88737ZM105.042 6.24447C106.341 6.49711 107.631 6.76181 108.914 7.0387L109.293 5.27925C107.999 4.99972 106.696 4.73256 105.386 4.47762L105.042 6.24447ZM112.756 7.91137C114.041 8.21805 115.317 8.53748 116.582 8.86982L117.039 7.12892C115.761 6.79302 114.472 6.47027 113.173 6.1605L112.756 7.91137ZM120.387 9.91877C121.655 10.2849 122.91 10.6647 124.152 11.0582L124.696 9.34233C123.439 8.94403 122.169 8.5598 120.887 8.18946L120.387 9.91877ZM127.893 12.3007C129.144 12.7358 130.379 13.1857 131.598 13.6505L132.239 11.9688C131.004 11.4974 129.752 11.0413 128.484 10.6005L127.893 12.3007ZM135.244 15.1088C136.464 15.6197 137.664 16.1466 138.843 16.6898L139.596 15.0549C138.397 14.5027 137.178 13.9673 135.94 13.4486L135.244 15.1088ZM142.388 18.4052C143.566 19.004 144.72 19.6203 145.849 20.2546L146.731 18.6854C145.58 18.0384 144.403 17.4102 143.203 16.8005L142.388 18.4052ZM149.214 22.247C150.336 22.9475 151.428 23.6675 152.489 24.4073L153.519 22.9309C152.432 22.1729 151.314 21.4361 150.167 20.7201L149.214 22.247ZM155.64 26.7371C156.676 27.55 157.676 28.3845 158.638 29.2409L159.835 27.8964C158.844 27.0142 157.816 26.1559 156.751 25.3209L155.64 26.7371ZM161.46 31.9276C162.376 32.8626 163.249 33.8214 164.077 34.8042L165.453 33.6444C164.595 32.626 163.692 31.634 162.746 30.668L161.46 31.9276ZM166.463 37.8796C167.218 38.9402 167.923 40.0265 168.576 41.1389L170.128 40.2274C169.448 39.0685 168.714 37.9381 167.93 36.8359L166.463 37.8796ZM170.385 44.5676C170.66 45.1529 170.921 45.7449 171.168 46.3438L172.832 45.6566C172.574 45.0314 172.301 44.4133 172.014 43.8025L170.385 44.5676Z"
                fill="white"
              ></path>
            </svg>
          </div>

          {/* <div className="bg-white rounded-full w-[80vw] h-18 mt-8"></div> */}
          <SearchBox sectionClass="mt-6 mb-18" />
        </div>
      </section>
      <main className="">
        <AboutUs />
        <HotelList />
      </main>
    </>
  );
}

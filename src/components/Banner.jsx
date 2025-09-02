import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import ima1 from '../assets/c1.png';
import ima2 from '../assets/c2.png';
import ima3 from '../assets/c3.png';
import ima4 from '../assets/c4.png';

const Banner = () => {
  // Custom navigation buttons
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);

  // Book slides data
  const bookSlides = [
    {
      image: ima1,
      title: "Explore Our Virtual Library",
      description: "Access thousands of books from the comfort of your home. Your next favorite read is just a click away!",
      button1: "Browse Collection",
      button2: "Learn More"
    },
    {
      image: ima2,
      title: "New Releases This Week",
      description: "Discover the latest additions to our collection from top authors around the world.",
      button1: "View New Books",
      button2: "See All"
    },
    {
      image: ima3,
      title: "Classic Literature Collection",
      description: "Timeless masterpieces that have shaped literature for generations. Now available in digital format.",
      button1: "Explore Classics",
      button2: "View All"
    },
    {
      image: ima4,
      title: "Personalized Recommendations",
      description: "Get book suggestions tailored to your reading preferences and interests.",
      button1: "Get Started",
      button2: "How It Works"
    }
  ];

  return (
    <div className="relative">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
      >
        {bookSlides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="hero min-h-[60vh] max-w-7xl mx-auto mt-10 md:mt-20 lg:mt-40 "
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="hero-overlay bg-opacity-70"></div>
              <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                  <h1 className="mb-5 text-3xl md:text-5xl font-bold">
                    {slide.title}
                  </h1>
                  <p className="mb-5 text-lg md:text-xl">
                    {slide.description}
                  </p>
                  <div className="flex gap-4 justify-center">
                    <Link to="/collection" className="btn btn-primary">
                      {slide.button1}
                    </Link>
                    <Link to="/about" className="btn btn-outline btn-secondary">
                      {slide.button2}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     
    </div>
  );
};

export default Banner;
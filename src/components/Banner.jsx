import React from "react";
import Slider from "react-slick";
import { ChevronLeft, ChevronRight } from "lucide-react"; // for arrow icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Sample books
const books = [
  { title: "Book One", image: "https://i.ibb.co/KjyWPZhQ/attachment-149069876.jpg" },
  { title: "Book Two", image: "https://i.ibb.co/JWqDMWLB/optimized-large-thumb-children-stories-book-cover-541-1.jpg" },
  { title: "Book Three", image: "https://i.ibb.co/cSv6FpLB/39f51c5e3e4e1c249ddeea8ae8e9ed73-romance-novel-watercolor-book-cover-design.jpg" },
  { title: "Book Four", image: "https://i.ibb.co/FLYj9mJ0/4d520fb3-bab8-4d4a-a209-17731bb9da86.jpg" },
  { title: "Book Five", image: "https://i.ibb.co/j9zWQWcg/1003w-53-S3-Izr-Nxv-Y.webp" },
  { title: "Book Six", image: "https://i.ibb.co/R44GYdHS/d33af487-8d7b-45af-8a95-2fdbdadbfab8.jpg" },
  { title: "Book Seven", image: "https://i.ibb.co/67jjHqNy/science-cover-book-design-with-microscope-vector-31136468.jpg" },
];

// Custom arrow components
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 left-0 z-10 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      onClick={onClick}
    >
      <ChevronLeft size={24} />
    </button>
  );
};

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute top-1/2 right-0 z-10 transform -translate-y-1/2 bg-white shadow p-2 rounded-full hover:bg-gray-100"
      onClick={onClick}
    >
      <ChevronRight size={24} />
    </button>
  );
};

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500, // slow transition
    autoplay: true,
    autoplaySpeed: 900,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
   <div className="mt-30">
     <div className="max-w-7xl mx-auto py-10 px-4 relative">
      <Slider {...settings}>
        {books.map((book, index) => (
          <div key={index} className="px-2">
            <div className="relative h-64 bg-white shadow-md rounded-lg overflow-hidden">
              {/* Title on top */}
              <div className="absolute top-2 left-2  bg-opacity-60 text-white px-2 py-1 rounded text-sm font-medium z-10">
                {book.title}
              </div>

              {/* Image */}
              <img
                src={book.image}
                alt={book.title}
                className="w-full h-full object-cover"
              />

              {/* Button centered bottom */}
              <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm">
                  View Books
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
   </div>
  );
};

export default Banner;

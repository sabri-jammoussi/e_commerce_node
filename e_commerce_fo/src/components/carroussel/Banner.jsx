import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MoveRight } from "lucide-react";

const Banner = () => {
  const products = [
    {
      id: 1,
      title: "Best Furniture collection for your interior",
      subTitle: "welcome to chairs",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
    {
      id: 2,
      title: "Best Furniture collection for your interior",
      subTitle: "welcome to chairs",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
    {
      id: 3,
      title: "Best Furniture collection for your interior",
      subTitle: "welcome to chairs",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
    {
      id: 4,
      title: "Best Furniture collection for your interior",
      subTitle: "welcome to chairs",
      image:
        "https://tailwindcss.com/plus-assets/img/ecommerce-images/product-page-01-related-product-01.jpg",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hide arrows on mobile
    responsive: [
      {
        breakpoint: 1024, // tablet breakpoint
        settings: {
          arrows: true, // Show arrows on tablet and desktop
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="slider-container w-full h-full">
        <Slider {...settings}>
          {products?.map((product) => (
            <div key={product?.id} className="banner_slide_item">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-4 md:p-0">
                {/* banner text  */}
                <div className="banner_text order-2 md:order-1 text-center md:text-left w-full md:w-1/2">
                  <p className="text-xs md:text-sm font-inter text-[#272343] uppercase font-normal">
                    {product?.subTitle}
                  </p>
                  <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#272343] font-inter capitalize leading-tight md:leading-normal max-w-[631px] w-full font-bold my-3 md:mb-5">
                    {product?.title}
                  </h3>
                  <button className="max-w-[171px] w-full flex items-center justify-center gap-2 h-[42px] md:h-[52px] bg-[#029fae] rounded-lg capitalize text-white cursor-pointer mx-auto md:mx-0">
                    shop now <MoveRight className="w-4 h-4" />
                  </button>
                </div>
                {/* banner image  */}
                <div className="banner_image order-1 md:order-2 w-full md:w-1/2 flex items-center justify-center md:justify-end">
                  <img
                    src={product?.image}
                    alt={product?.title}
                    className="max-h-[300px] md:max-h-full object-contain"
                  />
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

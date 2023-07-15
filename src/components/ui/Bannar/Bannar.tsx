import bannarSceond from "../../../img/bannar-2.jpg";
import bannaThird from "../../../img/bannar-1.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Bannar.css"

  const settings = {
    // dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 1,
    //     },
    //   },
    //   {
    //     breakpoint: 1280,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
  };


const Bannar = () => {
    return (
      <div className="">
        <div className="">
          <Slider className="overflow-hidden" {...settings}>
            <div id="bannar-slide">
              <div className="px-[20%]">
                <h1 className="slide-text text-5xl font-bold text-white">
                  Books improve our mind with good thoughts and knowledge
                </h1>
              </div>
            </div>
            <div className="">
              <img
                src={bannarSceond}
                className="bannar-image w-full"
                alt="Image 2"
              />
            </div>
            <div className="">
              <img
                src={bannaThird}
                className="bannar-image w-full"
                alt="Image 3"
              />
            </div>
          </Slider>
        </div>
      </div>
    );
};

export default Bannar;
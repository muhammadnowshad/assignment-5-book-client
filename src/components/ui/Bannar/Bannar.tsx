import bannarFirst from "../../../img/bannar-1.jpg"
import bannarSceond from "../../../img/bannar-2.jpg";
import bannaThird from "../../../img/bannar-3.jpg";


// import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 3,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 4,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };


const Bannar = () => {
    return (
      <div>
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={bannarFirst} className="w-full" />
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={bannarSceond} className="w-full" />
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={bannaThird} className="w-full" />
          </div>
        </div>


      </div>
    );
};

export default Bannar;
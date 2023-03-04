
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
    import "swiper/css";
    import "swiper/css/pagination";
    import "swiper/css/navigation";



function Products() {
    const img1Link = "Assets/img1Copy.jpg";
    const img2Link = "Assets/img2.jpg";
    const img3Link = "Assets/img3.jpg";
  return (
    <>
    <SEO title={"Products"}/>
    <Navbar/>
    
    <Swiper
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="myProducts"
      >
         <SwiperSlide><img className="img" src={img1Link} alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src={img2Link} alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src={img3Link} alt="" /></SwiperSlide>
      </Swiper>

    </>
  );
}

export default Products;
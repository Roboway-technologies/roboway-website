import './App.css';
import SEO from './components/SEO';
import Navbar from './components/Navbar';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';

 // swiper styles
    import 'swiper/css';
    import 'swiper/css/autoplay';

// component imports    
import SectionAnav from './components/SectionAnav';
import SectionBnav from './components/SectionBnav';
import SectionCnav from './components/SectionCnav';
import SectionDnav from './components/SectionDnav';
import Footer   from './components/Footer' ;

function Index() {
    const metaCoverLink = "https://raw.githubusercontent.com/Eddie2111/RoboWay-Frontend/main/public/Assets/metaCover.png";
    const img1Link =      "Assets/img22.jpg";
    const img2Link =      "Assets/img23.jpg";
    const img3Link =      "Assets/img24.jpg";
  return (
    <>
    <SEO title={"Welcome"}/>
    <Navbar/>
    
    <Swiper className='swiper' modules={[ Autoplay]} slidesPerView={1} zindex={-1101} autoplay={{ delay: 3000 }} pagination={{ clickable: false }}>
         <SwiperSlide><img className="img" src={metaCoverLink} alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src={img1Link} alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src={img2Link} alt="" /></SwiperSlide>
         <SwiperSlide><img className="img" src={img3Link} alt="" /></SwiperSlide>
    </Swiper>

    <SectionAnav/> {/* what we do */}
    
    <SectionBnav/> {/* how we work & stat*/}

    <SectionCnav/> {/* who are we, team intro */}

    <SectionDnav/> {/* current successful projects */}

    <Footer/>
    </>

  );
}

export default Index;
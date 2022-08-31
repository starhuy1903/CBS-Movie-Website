import React from 'react';
import './slider.scss'
// import Swiper core and required modules
import {Navigation, Pagination, Scrollbar, A11y} from 'swiper';

import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Thumb from "../Thumb";

const Slider = () => {
    return (
        <div className="slider">
            <div className="wrapper">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y]}
                    spaceBetween={0}
                    slidesPerView={4}
                    navigation

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    <SwiperSlide>
                        <div className="slideItem">
                            <img style={{textAlign: "center"}}
                                 src="https://movienew.cybersoft.edu.vn/hinhanh/madmax.jpg"
                                 alt=""/>
                            <Thumb></Thumb>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideItem">
                            <img style={{textAlign: "center"}}
                                 src="https://movienew.cybersoft.edu.vn/hinhanh/madmax.jpg"
                                 alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideItem">
                            <img style={{textAlign: "center"}}
                                 src="https://movienew.cybersoft.edu.vn/hinhanh/madmax.jpg"
                                 alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideItem">
                            <img style={{textAlign: "center"}}
                                 src="https://movienew.cybersoft.edu.vn/hinhanh/madmax.jpg"
                                 alt=""/>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slideItem">
                            <img style={{textAlign: "center"}}
                                 src="https://movienew.cybersoft.edu.vn/hinhanh/madmax.jpg"
                                 alt=""/>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Slider;
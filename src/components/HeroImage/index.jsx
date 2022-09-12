import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation} from "swiper";
import {Banner, Container} from "./HeroImage.styles";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const HeroImage = ({bannerList}) => {

    return (
        <Container>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    autoplay={true}
                    loop="true"
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >
                    {bannerList.map(banner => (
                        <SwiperSlide key={banner.maBanner}>
                            <Banner image={banner.hinhAnh} />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </Container>
    );
};

export default HeroImage;
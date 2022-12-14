import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation, EffectFade } from "swiper";
import {Banner, Container} from "./HeroImage.styles";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import {useSelector} from "react-redux";
import {getBanner} from "../../store/bannerSlice";

const HeroImage = () => {
    const bannerList = useSelector(getBanner)

    return (
        <Container>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y, Autoplay, EffectFade]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation
                    autoplay={true}
                    loop="true"
                    effect="fade"
                >
                    {bannerList?.map(banner => (
                        <SwiperSlide key={banner.maBanner}>
                            <Banner image={banner.hinhAnh} />
                        </SwiperSlide>
                    ))}
                </Swiper>
        </Container>
    );
};

export default HeroImage;
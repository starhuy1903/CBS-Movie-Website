import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import {A11y, Autoplay, Navigation} from "swiper";
import {Banner, Container} from "./HeroImage.styles";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {useSelector} from "react-redux";
import {selectBannerList} from "../../store/movies/moviesSlice";

const HeroImage = () => {
    const bannerList = useSelector(selectBannerList)

    if(!bannerList) return null;

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
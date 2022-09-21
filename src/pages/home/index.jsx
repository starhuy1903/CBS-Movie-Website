import React, {useEffect} from 'react';
import HeroImage from "../../components/HeroImage";
import {useDispatch, useSelector} from "react-redux";
import MoviesList from "../../components/MoviesList";
import Spinner from "../../components/Spinner";
import {Container} from "./Home.styles";
import {HTTP_STATUS} from "../../api/httpStatusConstants";
import {fetchBannerList, getBannerError, getBannerLoading} from "../../store/bannerSlice";
import {notificationActions} from "../../store/notificationSlice";


const Home = () => {
    const dispatch = useDispatch();

    const bannerLoading = useSelector(getBannerLoading)
    const bannerError = useSelector(getBannerError)

    useEffect(() => {
        dispatch(fetchBannerList());
    }, [dispatch])

    let content;
    if (bannerLoading === HTTP_STATUS.PENDING) {
        content = <Spinner/>;
    } else if (bannerLoading === HTTP_STATUS.REJECTED) {
        dispatch(notificationActions.createAlert({
            msg: bannerError,
            type: "error"
        }))
    } else if (bannerLoading === HTTP_STATUS.FULFILLED) {
        content = (
            <>
                <HeroImage/>
                <MoviesList/>
            </>
        )
    }

    return (
        <Container>
            {content}
        </Container>
    );
};

export default Home;
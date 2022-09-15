import React from 'react';
import {
    BrandContainer,
    BrandLogo,
    CompanyData,
    CompanySupport,
    Container,
    Partner,
    SupportLink,
    Wrapper
} from "./Footer.styles";
import {Logo} from "../../pages/login/Login.styles";
import companyLogo from '../../assets/images/react-movie-logo.svg'
import cgvLogo from '../../assets/images/cgv.png'
import lotteLogo from '../../assets/images/lotte.png'
import bhdLogo from '../../assets/images/bhd.png'
import galaxyLogo from '../../assets/images/galaxycine.png'
import cinestarLogo from '../../assets/images/cinestar.png'
import megagsLogo from '../../assets/images/megags.png'

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <CompanyData>
                    <Logo src={companyLogo} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus architecto aspernatur atque aut delectus dignissimos doloremque dolores dolorum enim eos explicabo fugiat harum id ipsa laboriosam laborum laudantium maiores nemo nesciunt nihil, nisi nobis nulla numquam possimus quaerat quia reprehenderit saepe sed sunt suscipit temporibus tenetur veritatis? Dolor, voluptates!</p>
                </CompanyData>

                <Partner>
                    <h3>Partners</h3>
                    <BrandContainer>
                        <BrandLogo src={cgvLogo} />
                        <BrandLogo src={bhdLogo} />
                        <BrandLogo src={galaxyLogo} />
                        <BrandLogo src={cinestarLogo} />
                        <BrandLogo src={lotteLogo} />
                        <BrandLogo src={megagsLogo} />
                    </BrandContainer>
                </Partner>

                <CompanySupport>
                    <h3>Company</h3>
                    <SupportLink>
                        <p>Contact us</p>
                        <p>F.A.Q</p>
                        <p>Careers</p>
                        <p>Memberships</p>
                    </SupportLink>
                </CompanySupport>

            </Wrapper>
        </Container>
    );
};

export default Footer;
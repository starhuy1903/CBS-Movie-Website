import React from 'react';
import {Container, Loader, LoaderWrapper} from "./Spinner.styles";

const Spinner = () => {
    return (
        <Container>
            <LoaderWrapper>
                <Loader>
                    <Loader className="loader-inner"/>
                </Loader>
            </LoaderWrapper>
        </Container>
    );
};

export default Spinner;
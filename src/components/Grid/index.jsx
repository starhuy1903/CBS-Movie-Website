import React from 'react';
import {Container, Content, Title, Wrapper} from "./Grid.styles";

const Grid = ({header, children}) => {

    return (
        <Container>
            <Wrapper>
                <Title>{header}</Title>
                <Content>{children}</Content>
            </Wrapper>
        </Container>
    );
};

export default Grid;
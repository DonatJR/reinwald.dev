import React, { FunctionComponent } from "react";
import styled from 'styled-components';

const Background = styled.div`
    width: 300px;
    height: 300px;
`;

export interface OverlayProps {

}

const Overlay: FunctionComponent<OverlayProps> = (props) => {
    return (
        <Background>
            {props.children}
        </Background>
    );
}

export default Overlay;
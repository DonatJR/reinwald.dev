import React, { FunctionComponent } from "react";

import styled from 'styled-components';
import FooterItems from './FooterItems';

const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(20px, auto) auto minmax(20px, auto);
    grid-template-rows: minmax(10px, 20px) auto minmax(10px, 20px);

    min-height: 100px;
`;

const FooterBackground = styled.div`
    grid-column: 1/4;
    grid-row: 1/4;
    background-color: #222;
`;

const FooterCell = styled.div`
    grid-column: 2;
    grid-row: 2;
    max-width: 1000px;

    justify-self: center;
    align-self: center;

    font-size: 20pt;
`

const FakeImpressumLink = styled.div`
    cursor: pointer;

    &::after {
        cursor: initial;
    }
`;

export interface FooterProps {
    showImpressum: () => void;
}

const Footer: FunctionComponent<FooterProps> = (props) => {
    return (
        <FooterGrid>
            <FooterBackground />
            <FooterCell>
                <FooterItems>
                    <FakeImpressumLink onClick={props.showImpressum}>Impressum</FakeImpressumLink>
                    <div>Source can be found <a href="https://github.com/DonatJR/reinwald.dev">here</a></div>
                    <div>Powered by <a href="https://pages.github.com/">GitHub Pages</a></div>
                </ FooterItems>
            </FooterCell>
        </FooterGrid >
    );
}



export default Footer;
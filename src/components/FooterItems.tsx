import React, { FunctionComponent } from "react";
import styled from 'styled-components';

const Items = styled.div`
    display: flex;
    flex-direction: row;

    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    > * {
        margin: 5px 0;
    }

    > *, a {
        font-size: 16pt;
    }

    > *:not(:last-child)::after {
        content: "🖖";
        margin: 0 10px;
    }
`;

export interface FooterItemsProps {

}

const FooterItems: FunctionComponent<FooterItemsProps> = (props) => {
    return (
        <Items>
            {props.children}
        </Items>
    );
}

export default FooterItems;
import React, { FunctionComponent } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const LinkElement = styled.a`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px;
    min-width: 100px;

    font-size: 14pt;
    border: solid 1px #00000000;
    text-decoration: none;

    &:hover {
        border-color: #dddddddd;
        cursor: pointer;
    }
`;

const ColoredIcon = styled(Icon)`
    width: 50px;
    height: auto;
    margin-bottom: 10px;

    > path {
        fill: #dddddddd;
    }
`;

export interface ContactLinkProps {
    iconifyIcon: any; // haven't figured out how to use IconifyIcon here -> type error on usage
    text: string;
    link: string;
}

const ContactLink: FunctionComponent<ContactLinkProps> = (props) => {
    return (
        <LinkElement href={props.link}>
            <ColoredIcon icon={props.iconifyIcon} />
            {props.text}
        </LinkElement>
    );
}

export default ContactLink;
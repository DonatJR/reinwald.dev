import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Items = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: -20px;

    > * {
        margin-top: 20px;
    }

    > *:not(:last-child) {
        margin-right: 20px;
    }
`;

export interface ContactListProps {

}

const ContactList: FunctionComponent<ContactListProps> = (props) => {
    return (<Items>{props.children}</Items>);
}

export default ContactList;
import React, { FunctionComponent } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Background = styled.div`
    position: fixed; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto; 

    height: 100vh;
    width: 100vw;

    z-index: 99;
    background-color: rgba(30, 30, 30, 0.9);

    overscroll-behavior: contain;
`;

const ContentBackground = styled.div`
    position: absolute; 
    left: 0; 
    right: 0; 
    top: 0;
    bottom: 0;
    margin: auto; 

    height: fit-content;
    width: 80vw;
    max-width: 1200px;

    background-color: rgb(220, 220, 220);
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

    overflow-y: auto;
`;

const Content = styled.div`
    * {
        color: #333333dd;
    }
    margin: 40px;
`;

const CloseButton = styled.button`
    color: #333333dd;
    font-size: 16pt;
    font-weight: bold;

    padding: 10px 20px;
    margin-top: 20px;

    background-color: rgba(0,0,0,0);
    border: 3px solid #333333dd;

    transition: all 0.1s ease-in-out;

    &:active, &:focus {
        outline: none;
    }

    &:hover {
        cursor: pointer;
        transform: scale(1.1, 1.1);
    }
`;

export interface ImpressumProps {
    show: boolean;
    closeImpressum: () => void;
}

const Impressum: FunctionComponent<ImpressumProps> = (props) => {
    const portalRoot = document.getElementById("modal-overlay");

    if (!props.show || !portalRoot) {
        return null;
    }

    return ReactDOM.createPortal(
        <Background onClick={props.closeImpressum}>
            <ContentBackground onClick={(e) => e.stopPropagation()}>
                <Content>
                    <h1>Impressum</h1>
                    <h2>Angaben gem&auml;&szlig; &sect; 5 TMG</h2>
                    <p>Jonas Reinwald<br />
                    Rudolf-Hell-Stra&szlig;e 2<br />
                    69126 Heidelberg</p>

                    <h2>Kontakt</h2>
                    <p>Telefon: +49 (0)177 614 0 688<br />
                    E-Mail: jonas@reinwald.dev</p>
                    <p>Quelle: <a href="https://www.e-recht24.de">https://www.e-recht24.de</a></p>
                    <CloseButton onClick={props.closeImpressum}>Close</CloseButton>
                </Content>
            </ContentBackground>
        </Background>,
        portalRoot
    );
}

export default Impressum;
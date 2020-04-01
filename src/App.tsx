import React from 'react';
import styled, { keyframes } from 'styled-components'

const scroll = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`

const Background = styled.div`
    background: linear-gradient(320deg, #09c494, #c40973, #0939c4);
    background-size: 600% 600%;
    height: 100vh;

    animation: ${scroll} 60s ease infinite;
`

const Content = styled.div`
    color: #dddddddd;

    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Intro = styled.div`
    font-size: 80pt;
    margin-bottom: 40px;
`

const GitHubRef = styled.div`
    font-size: 20pt;
    margin: 5px;

    a {
        color: #dddddddd;
    }
`

const Footer = styled.div`
    color: #dddddd;
    background-color: #222;
    padding: 20px;
    min-height: 100px;
`

function App() {
    return (
        <React.Fragment>
            <Background>
                <Content>
                    <Intro>Hi there!</Intro>
                    <GitHubRef><p>You can find me on <a target="_blank" rel="noopener noreferrer" href='https://github.com/DonatJR'>GitHub</a>.</p></GitHubRef>
                    <GitHubRef>Be sure to also check out <a target="_blank" rel="noopener noreferrer" href='https://github.com/SailReal'>SailReal</a> for some awesome projects!</GitHubRef>
                </Content>
            </Background>

            <Footer>Impressum will be here ;)</Footer>
        </React.Fragment>
    );
}

export default App;

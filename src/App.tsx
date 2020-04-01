import React from 'react';
import styled from 'styled-components'

const Background = styled.div`
    background: linear-gradient(320deg, #09c494, #c40973, #0939c4);
    background-size: 600% 600%;
    height: 100vh;

    animation: ColorScroll 60s ease infinite;

    @keyframes ColorScroll {
        0%{background-position:0% 50%}
        50%{background-position:100% 50%}
        100%{background-position:0% 50%}
    }
`

const Text = styled.div`
    font-family: 'Roboto', sans-serif;
    color: #dddddddd;
    font-size: 80pt;

    height: 100%;
    width: 100%;
     display: flex;
    position: fixed;
    align-items: center;
    justify-content: center;
`

function App() {
    return (
        <Background>
            <Text>Hi there!</Text>
        </Background>
    );
}

export default App;

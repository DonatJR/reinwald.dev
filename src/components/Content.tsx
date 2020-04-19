import React, { FunctionComponent } from 'react';
import styled, { keyframes } from 'styled-components'
import useCatPicUrl from '../scripts/custom_hooks/useCatPicUrl';
import keybaseIcon from '@iconify/icons-fa-brands/keybase';
import githubFilled from '@iconify/icons-ant-design/github-filled';
import mailOutlined from '@iconify/icons-ant-design/mail-outlined';
import ProjectList from './ProjectList';
import ContactList from './ContactList';
import ContactLink from './ContactLink';

const ContentGrid = styled.div`
    display: grid;
    grid-template-columns: minmax(20px, auto) auto minmax(20px, auto);
    grid-template-rows: minmax(20px, 100px) auto minmax(20px, 0);

    height: fit-content;
    min-height: 100vh;
`;

const scroll = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
`;

const Background = styled.div`
    grid-column: 1/4;
    grid-row: 1/4;

    background: linear-gradient(320deg, #09c494, #c40973, #0939c4);
    background-size: 600% 600%;

    animation: ${scroll} 60s ease infinite;
`;

const ContentCell = styled.div`
    grid-column: 2;
    grid-row: 2;

    max-width: 1000px;

    justify-self: center;

    font-size: 20pt;
`;

const Headline = styled.div`
    font-size: 56pt;
    margin-bottom: 40px;

    display: flex;
    justify-content: center;
`;

const CatImage = styled.img`
    max-width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export interface ContentProps {

}

const Content: FunctionComponent<ContentProps> = () => {
    const catImageUrl = useCatPicUrl();

    return (
        <ContentGrid>
            <Background />
            <ContentCell>
                <Headline>Hey there!</Headline>
                <p>This is just another personal website of just another software dev ;). The only reason it exists is for me to test out some stuff and have a bit of fun while doing just that.</p>
                <p>I am currently enrolled at <a href="https://www.uni-heidelberg.de/en">Heidelberg University</a> and working for <a href="https://www.combit.net/">combit</a>.</p>
                <p>Here are some other projects you can check out:</p>
                <ProjectList>
                    <a href="https://recipeasy.reinwald.dev">recipeasy</a>
                </ProjectList>
                <p>You can find and contact me at:</p>
                <ContactList>
                    <ContactLink link="https://github.com/DonatJR" text="GitHub" iconifyIcon={githubFilled} />
                    <ContactLink link="https://keybase.io/donatjr" text="Keybase" iconifyIcon={keybaseIcon} />
                    <ContactLink link="mailto://jonas@reinwald.dev" text="Mail" iconifyIcon={mailOutlined} />
                </ContactList>
                <p>Also, have a nice day and a cat picture:</p>
                <CatImage src={catImageUrl} />
                <p>And most important of all, don't forget to <span role="img" aria-label="Droplet Emoji">💧</span><span role="img" aria-label="Bar of Soap Emoji">🧼</span><span role="img" aria-label="Palms Up Together Emoji">🤲</span>!</p>
            </ContentCell>
        </ContentGrid >
    );
}

export default Content;
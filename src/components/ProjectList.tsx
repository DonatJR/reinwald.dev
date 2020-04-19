import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const BulletPoint = styled.div`
    padding-left: 20px;
`;

export interface ProjectListProps {

}

const ProjectList: FunctionComponent<ProjectListProps> = (props) => {
    const bulletPoints = React.Children.map(props.children, (child) => {
        return <BulletPoint><span role="img" aria-label="Electric Light Bulb Emoji">💡</span> {child}</BulletPoint>;
    });

    return (<>{bulletPoints}</>);
}

export default ProjectList;
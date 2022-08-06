import React from 'react';
import { Header } from 'semantic-ui-react';

function MainHeader({ title, type = 'h1' }) {
    return(
        <Header as='h1'>{title}</Header>
    )
}

export default MainHeader
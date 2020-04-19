import React from 'react';

import Content from './Content';
import Footer from './Footer';

function App() {
    return (
        // grid: content + footer
        // content grid: title + content (text) + find me at (sites) + some more projects (link to recipease, ...)
        <React.Fragment>
            <Content />
            <Footer />
        </React.Fragment>
    );
}

export default App;

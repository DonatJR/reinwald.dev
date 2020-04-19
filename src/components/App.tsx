import React, { useState } from 'react';

import Content from './Content';
import Footer from './Footer';
import Impressum from './Impressum';

function App() {
    const [showImpressum, setShowImpressum] = useState(false);

    return (
        // grid: content + footer
        // content grid: title + content (text) + find me at (sites) + some more projects (link to recipease, ...)
        <React.Fragment>
            <Impressum show={showImpressum} closeImpressum={() => setShowImpressum(false)} />
            <Content />
            <Footer showImpressum={() => setShowImpressum(true)} />
        </React.Fragment>
    );
}

export default App;

import React, { useState, useRef } from 'react';
import { ThemeProvider } from 'styled-components';
import { useOnClickOutside } from './hooks';
import { GlobalStyles } from './global';
import { theme } from './theme';
import { Burger, Menu } from './components';
import FocusLock from 'react-focus-lock';
import { Route, BrowserRouter as Router } from 'react-router-dom';

import Intro from './Pages/Intro';
import Landing from './Pages/Landing';
import Soup from './Pages/Soup';


function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  const menuId = "main-menu";

  useOnClickOutside(node, () => setOpen(false));

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <div ref={node}>
          <FocusLock disabled={!open}>
            <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
            <Menu open={open} setOpen={setOpen} id={menuId} />
          </FocusLock>

        </div>
        <div>
          <Router>
            <Route path="/" exact component={Intro} />
            <Route path="/landing" component={Landing} />
            <Route path="/soup" component={Soup} />
          </Router>
        </div>

      </>
    </ThemeProvider>
  );
}

export default App;

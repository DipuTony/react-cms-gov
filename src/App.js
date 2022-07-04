import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import SideDrawer from './Components/SideDrawer'

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <SideDrawer />
    </StyledEngineProvider>
  );
}

export default App;

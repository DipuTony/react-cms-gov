import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom"
import EventMaster from './Pages/EventMaster';
import Home from './Pages/Home';
import AnnouncementMaster from './Pages/AnnouncementMaster';
import NewsMaster from './Pages/NewsMaster';
import ErrorPage from './Pages/ErrorPage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const queryClient = new QueryClient()
  return (

    

    <QueryClientProvider client={queryClient}>
      <StyledEngineProvider injectFirst>
        {/* <SideDrawer /> */}
        <ToastContainer />  {/* This is for toast mesage*/}
        <Router>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/EventMaster' element={<EventMaster />} />
            <Route path='/NewsMaster' element={<NewsMaster />} />
            <Route path='/AnnouncementMaster' element={<AnnouncementMaster />} />
            <Route path='*' element={<ErrorPage />} />
            
          </Routes>
        </Router>
      </StyledEngineProvider>
    </QueryClientProvider>

  );
}

export default App;

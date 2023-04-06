import React from 'react'
import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import {Box} from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';


const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0)
  
  }, [pathname])
  
  return null;
}

const App = () => {

  return(
        <BrowserRouter>
        <ScrollToTop />
        <Box sx={{backgroundColor: '#000'}}>
            <Navbar />
            <Routes>
                <Route path='/' exact element={<Feed />} />
                <Route path='/video/:id'  element={<VideoDetail />} />
                <Route path='/channel/:id'  element={<ChannelDetail />} />
                <Route path='/search/:searchTerm'  element={<SearchFeed />} />
            </Routes>
        </Box>
    </BrowserRouter>
  )
}


export default App
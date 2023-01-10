import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Box } from '@mui/material'
import Navbar from './components/Navbar'

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor : '#170'}}>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={[]}/>
            </Routes>
        </Box>
    </BrowserRouter>  
)

export default App
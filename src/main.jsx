import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// import { BrowserRouter } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import App from './App.jsx';
import NFP from './pages/NotFoundPage.jsx';
import ContributorsPage from './pages/contributorsPage.jsx';

import Programming from './pages/ProgLes.jsx';
import English from './pages/EnglishLes.jsx';
import subscriptionPage from './pages/subscription.jsx';

import Flowchart from './pages/Flowchart.jsx';

import About from './pages/about.jsx';

import SoundDevices from './pages/soundDevices.jsx';
import FigureOfSpeech from './pages/figureOfSpeech.jsx';
import Literacy from './pages/literary.jsx'

// MAIN

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {path:"/", element: <App/>},
  {path:"*", element: <NFP/>},

  {path:"/dashboard", element: <Dashboard/>},
  {path:"/contributors", element: <ContributorsPage/>},
  {path:"/subscription", element: <subscriptionPage/>}, 
  {path:"/programming", element: <Programming/>,},
  {path:"/english", element: <English/>,},
  
  {path:"/programming/flowchart", element: <Flowchart/>},

  {path:"/about", element: <About/>},

  {path:"/sounddevices", element: <SoundDevices/>},
  {path:"/figurespeech", element: <FigureOfSpeech/>},
  {path:"/literacy", element: <Literacy/>},
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <createBrowserRouter baseName="/">
    <RouterProvider router={router}/>
      </createBrowserRouter>
  </StrictMode>
)

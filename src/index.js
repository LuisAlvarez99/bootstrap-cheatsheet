import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Accordion from './components/Accordion';
import Cards from './components/Cards';

const router = createBrowserRouter([
  {
    path:'/',
    element: <App/>
  },
  {
    path:'/accordion',
    element: <Accordion/>
  },
  {
    path:'/cards',
    element: <Cards/>
  },
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
    // <App />
);

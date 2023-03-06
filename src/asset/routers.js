import React from 'react'
import { createBrowserRouter } from 'react-router-dom';
import Account from '../components/Account';


export  const routerElem = ()=>{
     const router = createBrowserRouter([
        {
            path:'/',
            element: <Account/>
        }
    ])
    return router;
   }


import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './Layout.jsx';

import { Admin, Home, Login, Personnel, System } from '../components'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={ <Home /> } />

        <Route path='/' element={ <Layout /> }>
          <Route path='admin' element={ <Admin /> }/>
          <Route path='login' element={ <Login /> }/>
          <Route path='personnel' element={ <Personnel /> }/>
          <Route path='system' element={ <System /> }/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

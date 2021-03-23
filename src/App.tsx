import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { HomePage } from './HomePage';
import { Header } from './Header';
import { Grid } from './Grid';
import { Pippo } from './Pippo';
import {NotFoundPage} from './NotFoundPage';
import {CustomerGrid} from './CustomerGrid';
import {Customer} from './Customer';
import {OrderPage} from './OrderPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="" element={<HomePage />}></Route>
          <Route path="grid" element={<Grid />}></Route>
          <Route path="pippo" element={<Pippo />}></Route>
          <Route path="customers" element={<CustomerGrid />}></Route>
          <Route path="new-customer" element={<Customer />}></Route>
          <Route path="order-page" element={<OrderPage />}></Route>
          <Route path="*" element={<NotFoundPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

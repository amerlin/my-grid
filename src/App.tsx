import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from './Store';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import { HomePage } from './HomePage';
import { Header } from './Header';
import { Grid } from './Grid';
import { Customers } from './Customers';
import { Orders } from './Orders';
import { NotFoundPage } from './NotFoundPage';

const store = configureStore(); //redux

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="" element={<HomePage />}></Route>
            <Route path="customers" element={<Customers />}></Route>
            <Route path="orders" element={<Orders />}></Route>
            <Route path="grid" element={<Grid />}></Route>
            <Route path="*" element={<NotFoundPage />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;

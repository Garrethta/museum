import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.scss';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { HeaderComponent } from './HeaderComponent';
import { FooterComponent } from './FooterComponent';
import { HomeComponent } from './HomeComponent';
import { MaterialComponent } from './MaterialComponent';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between',minHeight:'100vh' }}>
      <HeaderComponent />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomeComponent />} />
          <Route path={`/old/:id`} element={<MaterialComponent mode='old' />} />
          <Route path={`/new/:id`} element={<MaterialComponent mode='new' />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </div>
  </React.StrictMode>
);
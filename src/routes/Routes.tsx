import React from 'react';
import {Routes, Route} from 'react-router-dom';
import App from '../App';
import { HooksExemple } from '../Pages/hooksApp';



const RoutesApp: React.FC = () => (
  <Routes>
    <Route path="/" element={<App/>} />
    <Route path="/hooks" element={<HooksExemple />} />
  </Routes>
);

export default RoutesApp;
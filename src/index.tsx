import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import { ToastContainer } from 'react-toastify';
import {GlobalStyles} from "./styles/golbal";
import UserProvider from './contexts/AuthContext';
import "react-toastify/dist/ReactToastify.min.css"
import TechProvider from './contexts/UserTechsContext';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <UserProvider>
      <TechProvider>
        <ToastContainer
      position='top-right' 
      autoClose={3000} 
      hideProgressBar={false} 
      pauseOnHover={true}
      theme="dark"      
      />
        <GlobalStyles/>
        <MainRoutes/>
      </TechProvider>
    </UserProvider>
    </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);


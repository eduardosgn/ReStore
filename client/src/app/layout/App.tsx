import { useState } from "react";

import { Container, CssBaseline } from "@mui/material";
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import { Route, Switch, useLocation } from "react-router";

import Header from "./Header";
import Catalog from "../../features/catalog/Catalog";
import Homepage from "../../features/home/Homepage";
import ProductDetails from "../../features/catalog/ProductDetails";
import AboutPage from "../../features/about/AboutPage";
import ContactPage from "../../features/contact/ContactPage";

import { AnimatePresence } from "framer-motion";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';

  const location = useLocation();

  function handleThemeChange() {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: palleteType,
      background: {
        default: palleteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header darkMode={ darkMode } handleThemeChange={ handleThemeChange } />
      <Container>
        <AnimatePresence exitBeforeEnter>
          <Switch key={location.pathname} location={location}>
            <Route exact path='/' component={ Homepage } />
            <Route path='/catalog' component={ Catalog } />
            <Route path='/catalog/:id' component={ ProductDetails } />
            <Route path='/about' component={ AboutPage } />
            <Route path='/contact' component={ ContactPage } />
          </Switch>
        </AnimatePresence>
      </Container>
    </ThemeProvider>
  );
};

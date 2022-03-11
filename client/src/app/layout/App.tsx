import { useState } from "react";

import Catalog from "../../feature/catalog/Catalog";

import { Container, CssBaseline } from "@mui/material";
import createTheme from '@mui/material/styles/createTheme';
import ThemeProvider from '@mui/material/styles/ThemeProvider';

import Header from "./Header";


export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const palleteType = darkMode ? 'dark' : 'light';

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
        <Catalog />
      </Container>
    </ThemeProvider>
  );
};

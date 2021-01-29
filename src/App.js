import React, { useState } from "react";

import { ThemeProvider } from "styled-components";
import { getTheme } from "./themes/getTheme";
import THEMES from "./constants/themes";
import { Container } from "./styles/styles";
import Formulario from "./components/formulario";

function App() {
  const [themeName, setThemeName] = useState(THEMES.BASIC);

  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <Container>
        <button onClick={() => setThemeName(THEMES.APPLE)}>WHITE</button>
        <button onClick={() => setThemeName(THEMES.DARCULA)}>BLACK</button>
        <Formulario />
      </Container>
    </ThemeProvider>
  );
}

export default App;

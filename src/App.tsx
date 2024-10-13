import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import ThemeCustomizer from "./components/ThemeCustomizer";
import { useState } from "react";
import { CustomThemeContext } from "./context";
import { ThemeEnum, ThemeType, User } from "./types";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
});

const App = () => {
  const [theme, setTheme] = useState<ThemeType>("light");
  const [user, setUser] = useState<User | null>(null);

  return (
    <CustomThemeContext.Provider value={{ theme, setTheme, user, setUser }}>
      <ThemeProvider theme={theme === ThemeEnum.Light ? lightTheme : darkTheme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/theme" element={<ThemeCustomizer />} />
        </Routes>
      </ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default App;

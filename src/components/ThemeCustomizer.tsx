import {
  Box,
  Button,
  FormControl,
  Grid2 as Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { CustomThemeContext } from "../context";
import { useContext, useState } from "react";
import { ThemeEnum, ThemeType } from "../types";
import LoginForm from "./LoginForm";
import { useNavigate } from "react-router-dom";
import mockData from "../mockData";

const ThemeCustomizer = () => {
  const context = useContext(CustomThemeContext);
  if (!context) throw new Error("Something went wrong in context");
  const { setTheme, user, setUser } = context;
  const [choosenTheme, setChoosenTheme] = useState<any>(
    user ? user?.preference : ThemeEnum.Light
  );

  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (user) {
      setUser({ ...user, preference: choosenTheme });
      mockData.forEach((value, index) => {
        if (value.name === user.name && value.password === user.password) {
          mockData.splice(index, 1);
          value = { ...value, preference: choosenTheme };
          mockData.push(value);
        }
      });
      setTheme(choosenTheme);
    }
  };

  const handleChange = (event: SelectChangeEvent<ThemeType>) => {
    setChoosenTheme(event.target.value);
  };

  const handleBackClick = () => {
    navigate("/");
  };
  return (
    <>
      {user ? (
        <Box component="form" textAlign="center" onSubmit={handleSubmit}>
          <Grid container spacing={2} flexDirection="column" padding={2}>
            <Grid>
              <FormControl>
                <InputLabel id="theme-simple-select-label">Theme</InputLabel>
                <Select
                  labelId="theme-simple-select-label"
                  id="theme-simple-select"
                  value={choosenTheme}
                  label="Theme"
                  onChange={handleChange}
                >
                  <MenuItem value={ThemeEnum.Light}>
                    {ThemeEnum.Light} ☀️
                  </MenuItem>
                  <MenuItem value={ThemeEnum.Dark}>
                    {ThemeEnum.Dark} 🌙
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid>
              <Button variant="contained" type="submit">
                Choose
              </Button>
              <Button onClick={handleBackClick}>Back</Button>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <LoginForm />
      )}
    </>
  );
};

export default ThemeCustomizer;

import {
  Box,
  Button,
  Grid2 as Grid,
  TextField,
  Typography,
  Alert,
} from "@mui/material";
import { useContext, useState } from "react";
import mockData from "../mockData";
import { useNavigate } from "react-router-dom";
import { CustomThemeContext } from "../context";

const LoginForm = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const context = useContext(CustomThemeContext);
  if (!context) throw new Error("Something went wrong in context");
  const { setUser, setTheme } = context;
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!Boolean(userName.trim()) || !Boolean(password.trim()))
      setShowAlert(true);
    for (const user of mockData) {
      if (user.name === userName && user.password === password) {
        setUser(user);
        setTheme(user.preference)
        navigate("/theme");
      }
    }
    setShowAlert(true);
  };

  const nameChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setShowAlert(false);
    setUserName(event.target.value);
  };

  const passwordChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setShowAlert(false);
    setPassword(event.target.value);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      textAlign="center"
      padding={2}
    >
      <Grid
        container
        spacing={2}
        padding={2}
        flexDirection="column"
        sx={{ border: "1px solid grey", borderRadius: "5px" }}
      >
        {showAlert && (
          <Alert severity="error">User Name or Password is incorrect</Alert>
        )}
        <Typography variant="h5">Log In</Typography>
        <Grid>
          <TextField
            label="User Name"
            type="text"
            value={userName}
            onChange={nameChangeHandler}
          />
        </Grid>
        <Grid>
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={passwordChangeHandler}
          />
        </Grid>
        <Grid>
          <Button variant="contained" type="submit">
            Log in
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;

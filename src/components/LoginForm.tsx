import {
  Box,
  Button,
  Grid2 as Grid,
  TextField,
  Typography,
} from "@mui/material";

const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("submitted");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      textAlign="center"
      padding={2}
      sx={{ width: "400px", border: "1px solid grey", borderRadius: "5px" }}
    >
      <Typography variant="h5">Log In</Typography>
      <Grid container spacing={2} padding={2} flexDirection="column">
        <Grid>
          <TextField label="User Name" type="text" />
        </Grid>
        <Grid>
          <TextField label="Password" type="password" />
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

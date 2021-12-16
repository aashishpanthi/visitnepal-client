import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles/Login.css";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const BRAND_NAME = "Visitnepal";

  return (
    <div>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Typography variant="h6">{BRAND_NAME}</Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Grid container spacing={0} justify="center" direction="row">
        <Grid item>
          <Grid
            container
            direction="column"
            justify="center"
            className="login-form"
          >
            <Paper
              variant="elevation"
              elevation={2}
              className="login-background"
            >
              <Grid item>
                <Typography component="h1" variant="h5" style={{marginBottom: "1rem", textAlign:"center"}} >
                  Sign in
                </Typography>
              </Grid>
              <Grid item>
                <form>
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        required
                        fullWidth
                        id="outlined-required"
                        type="email"
                        label="Email address"
                        autoComplete="email"
                        variant="outlined"
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        required
                        fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        variant="outlined"
                        autoComplete="current-password"
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        color="primary"
                        type="submit"
                        className="button-block"
                      >
                        Login
                      </Button>
                    </Grid>
                  </Grid>
                </form>
              </Grid>
              <Grid item>
                <Link to="/" variant="body2"  className="forgotPass">
                  Forgot Password?
                </Link>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;

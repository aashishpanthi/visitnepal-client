import { useState } from "react";
import {
  Button,
  TextField,
  Grid,
  Paper,
  AppBar,
  Typography,
  Toolbar,
  FormHelperText
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles/Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();

    if(!email || !pass){
      setError("All fields are required");
    }
    // else if(email !== "aashishpanthi11@gmail.com"){
    //   setError("You are wrong")
    // }
  }

  const BRAND_NAME = "Visitnepal";

  return (
    <div>
      <AppBar position="static" alignitems="center" color="primary">
        <Toolbar>
          <Grid container justify="center" wrap="wrap">
            <Grid item>
              <Link to="/" className="brand_name">
              <Typography variant="h6">{BRAND_NAME}</Typography>
              </Link>
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
                <form onSubmit={handleSubmit}>
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
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
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                      />
                    </Grid>

                    {error && (
                      <Grid item>
                      <FormHelperText>{error}</FormHelperText>
                    </Grid>
                    )}


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

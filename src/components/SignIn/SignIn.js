import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Dashboards from "../dashboard/Dashboard";
import VerifyUserStatus from "../requests/VerifyUser";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  alert: {
    display: "none",
  },
}));

export default function SignIn() {
  const classes = useStyles();
  let user = null;
  let isAuthorized = false;

  const [state, setState] = React.useState({
    ifError: false,
  });

  const handleErrorMessage = () => {
    document.getElementById("alert").style = "display: block"
      ? (document.getElementById("alert").style = "display: none")
      : (document.getElementById("alert").style = "display: block");
  };

  const handleLogin = (event) => {
    event.preventDefault();
    VerifyUserStatus();
    var myHeaders = new Headers();
    myHeaders.append("tenant", "uitest");
    myHeaders.append("withCredentials", "true");
    myHeaders.append("Content-Type", "application/json;charset=UTF-8");

    var raw = JSON.stringify({
      email: document.getElementById("email").value,
      password: document.getElementById("password").value,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
      credentials: "include",
    };

    fetch("https://api.esch.pl/api/auth/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          isAuthorized = true;
        }
      })
      .then((data) => {
        localStorage.setItem("token", data.accessToken);
      })
      .catch((error) => {
        console.log(error);
      });

    fetch("https://api.esch.pl/api/auth/login", requestOptions)
      .then((response) => {
        if (response.ok) {
          window.location = "/Dashboard";
        } else {
          document.getElementById("alert").style = "display: block";
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Artem: Test UI
        </Typography>
        <br />
        <br />
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <div
            class="alert alert-danger alert-dismissible"
            role="alert"
            style={{ display: "none" }}
            id="alert"
          >
            Incorrect email or password
            <button
              type="button"
              class="close"
              data-dismiss="alert"
              aria-label="Close"
              onClick={handleErrorMessage}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

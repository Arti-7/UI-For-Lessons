import React from "react";
import clsx from "clsx";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import ListCourses from "../courses/ListCourses";
import { Link } from "react-router-dom";

class Dashboards extends React.Component {
  state = {
    isAuthorized: true,
  };

  classes = {
    title: {
      flexGrow: 1,
      justifyContent: "space-between",
    },

    user: {
      color: "white",
    },
    link: {
      color: "white",
      outline: "none",
    },
  };
  fixedHeightPaper = clsx(this.classes.paper, this.classes.fixedHeight);

  handleLogut = () => {
    window.location = "/";
  };

  render() {
    return (
      <div className={this.classes.root}>
        <CssBaseline />
        <AppBar
          position="absolute"
          className={clsx(
            this.classes.appBar && this.Copyrightclasses.appBarShift
          )}
        >
          <Toolbar
            className="navbar"
            styles={{ justifyContent: "space-between", flexGrow: "1" }}
          >
            <IconButton color="white">
              <AccountBoxIcon style={{ color: "white" }} />
            </IconButton>
            <Typography
              component="h1"
              variant="h4"
              color="inherit"
              noWrap
              className={this.classes.title}
              styles={{ justifyContent: "space-between", flexGrow: "1" }}
            >
              Artem: Training Case
            </Typography>
            <Link to="/">
              <IconButton style={{ color: "white" }} onClick={this.handleLogut}>
                <ExitToAppIcon />
              </IconButton>
            </Link>
          </Toolbar>
        </AppBar>
        <main className={this.classes.content} style={{ padding: "100px" }}>
          <ListCourses />
        </main>
      </div>
    );
  }
}
export default Dashboards;

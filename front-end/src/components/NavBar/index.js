import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {} from "react-native-vector-icons";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <AppBar sx={{}} position="static" color="default" alignItems="center">
      <Toolbar>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                {" "}
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MenuIcon />
                </IconButton>
              </Grid>
              <Grid item>
                <Typography
                  component={Button}
                  onClick={() => navigate("/")}
                  variant="h6"
                  sx={{ color: "black" }}
                >
                  Bat4life
                </Typography>
              </Grid>
              <Grid item>
                <Button onClick={() => navigate("/wallet")}>Wallet</Button>
              </Grid>
              <Grid item>
                <Button onClick={() => navigate("/marker")}>Maker</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            {" "}
            <Button color="inherit" sx={{ textTransform: "capitalize" }}>
              Sign in
            </Button>
            <Button
              sx={{
                color: "white",
                textTransform: "capitalize",
                backgroundColor: "#253154",
              }}
            >
              Sign up
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;

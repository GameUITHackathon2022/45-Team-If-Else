import React from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Grid,
  IconButton,
  MenuIcon,
} from "@material-ui/core";

const NavBar = () => {
  return (
    <AppBar sx={{}} position="static" color="default">
      <Toolbar>
        <Grid container justifyContent={"space-between"}>
          <Grid item>
            <Grid container>
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
                <Typography variant="h6" sx={{ padding: 1 }}>
                  Bat4life
                </Typography>
              </Grid>
              <Grid item>
                {" "}
                <Button sx={{ padding: 1 }}>Wallet</Button>
              </Grid>
              <Grid item>
                <Button sx={{ padding: 1 }}>Maker</Button>
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

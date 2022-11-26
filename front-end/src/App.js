// import ButtonAppBar from "./screens/main";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="default">
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
      <Button color="inherit">Sign up</Button>
    </Box>
    <Grid container>
      <Grid item>
        
      </Grid>
      <Grid item></Grid>
    </Grid>
  );
}

export default App;

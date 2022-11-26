// import ButtonAppBar from "./screens/main";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Stack,
  CardHeader,
  IconButton,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const data = [
  {
    name: "test",
    desc: "test",
    "image-url": "test",
  },
  {
    name: "test",
    desc: "test",
    "image-url": "test",
  },
  {
    name: "test",
    desc: "test",
    "image-url": "test",
  },
  {
    name: "test",
    desc: "test",
    "image-url": "test",
  },
  {
    name: "test",
    desc: "test",
    "image-url": "test",
  },
  {
    name: "test",
    desc: "test",
    "image-url": "test",
  },
  {
    name: "test",
    desc: "test",
    "image-url": "test",
  },
];

const Main = () => {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: 4,
      }}
    >
      <Stack
        spacing={2}
        sx={{ padding: 4, flex: 1, maxHeight: "100vh", overflow: "scroll" }}
      >
        {data.map((item) => (
          <Card sx={{ display: "flex" }} variant="outlined">
            <CardMedia
              component="img"
              image="https://nqtm.vn/wp-content/uploads/2020/04/acd21e9a-min.png"
              sx={{ height: 160 }}
              alt="minh-hoa"
            ></CardMedia>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardHeader
                action={
                  <IconButton aria-label="settings" edge="end">
                    <FavoriteBorderIcon />
                  </IconButton>
                }
                title="Name of market"
                titleTypographyProps={{ fontWeight: "bold" }}
              />
              <CardContent>
                <Typography
                  variant="subtitle1"
                  color="text.primary"
                  component="div"
                >
                  280B, An Dương Vương, phường 10, quận 5
                </Typography>
                <Typography>5 km</Typography>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Stack>
      <Box sx={{ flex: 1, backgroundColor: "red" }}></Box>
    </Box>
  );
};

export default Main;

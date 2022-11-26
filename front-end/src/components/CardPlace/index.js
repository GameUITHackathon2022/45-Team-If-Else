import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

const CardPlace = () => {
    return(
        <Card sx={{display: "flex"}}>
            <CardMedia 
            component="img"
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fvi.wikipedia.org%2Fwiki%2FCircle_K&psig=AOvVaw3CoPb6Ex1Y2gzRpOQi7j0F&ust=1669538871812000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCLCmuY-7y_sCFQAAAAAdAAAAABAD"
            sx={{width: 151}}
            alt="minh-hoa"
            >
                <Box sx={{display:"flex", flexDirection:"column"}}>
                    <CardContent sx={{flex: "1 0 auto"}}>
                        <Typography>Name of market</Typography>
                        <Typography variant="subtitle1" color="text.primary" component="div">280B, An Dương Vương, phường 10, quận 5</</Typography>
                        <Typography>5 km</Typography>
                    </CardContent>
                </Box>
            </CardMedia>
        </Card>            
    );
};

export default CardPlace;
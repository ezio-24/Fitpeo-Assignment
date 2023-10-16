import {
    Avatar,
    Card,
    CardActionArea,
    CardContent,
    Chip,
    Grid,
    Typography,
  } from "@mui/material";
  import DonutSmallIcon from "@mui/icons-material/DonutSmall";
  
  import { blue } from "@mui/material/colors";
  import React from "react";
  
  const Revenue = () => {
    return (
      <Card sx={{ boxShadow: 3 }}>
        <CardActionArea>
          <CardContent>
            <Grid container columnSpacing={1.4} alignItems="center">
              <Grid item>
                <Avatar sx={{ bgcolor: blue[500],borderRadius:"12px" }} variant="rounded">
                <DonutSmallIcon />
                </Avatar>
              </Grid>
              <Grid item>
                <Typography component="h2" fontSize={12}>
                  Revenue
                </Typography>
  
                <Typography variant="h6" component="h2">
                  $21,456
                </Typography>
              </Grid>
  
              <Grid item
              sx={{alignSelf:"end",
              ml:"auto"}}>
              <Chip
                  size="small"
                  label="+ 1.15%"
                  sx={{ bgcolor: "rgba(0,155,0, 0.1)", color: "green" }}
                />
              </Grid>
  
  
            </Grid>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  };
  
  export default Revenue;
  
import {Card,CardContent,CardActionArea, Avatar,Typography,Grid, Chip } from "@mui/material";

import LocalMallIcon from '@mui/icons-material/LocalMall';
import { blue } from "@mui/material/colors";

const Orders = () => {
  return (
    <Card sx={{ boxShadow: 4 }}>
      <CardActionArea>
        <CardContent>
          <Grid container columnSpacing={1.5} alignItems="center">
            <Grid item>
              <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
                <LocalMallIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography component="h2" fontSize={12}>
                Orders
              </Typography>

              <Typography variant="h6" component="h2">
                5,643
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                alignSelf: "end",
                ml: "auto",
              }}
            >
              <Chip size="small" label="- 0.82%" sx={{bgcolor: "rgba(155,0,0, 0.1)", color:"red"}} />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Orders;

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import GroupIcon from '@mui/icons-material/Group';
import { blue } from "@mui/material/colors";

const Customers = () => {
  return (
    <Card sx={{ boxShadow: 4 }}>
      <CardActionArea>
        <CardContent>
          <Grid container columnSpacing={1.5} alignItems="center">
            <Grid item>
              <Avatar sx={{ bgcolor: blue[500], borderRadius:"8px" }} variant="rounded">
                <GroupIcon />
              </Avatar>
            </Grid>
            <Grid item>
              <Typography component="h2" fontSize={12}>
                Customer
              </Typography>

              <Typography variant="h6" component="h2">
                45,254
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                alignSelf: "end",
                ml: "auto",
              }}
            >
              <Chip size="small" label="- 1.04%" sx={{bgcolor: "rgba(155,0,0, 0.1)", color:"red"}} />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Customers;

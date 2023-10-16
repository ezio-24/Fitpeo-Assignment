import { Button, Chip, Grid, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import ExpandMore from "@mui/icons-material/ExpandMore";
import React from "react";

import { Bar } from "react-chartjs-2"
import { blue } from "@mui/material/colors";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const data = {
  labels: ["Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug","Sept","Oct"],
  datasets: [
    {
      label: "Revenue",
      backgroundColor: blue[500],

    
     
      
      borderColor: blue[500],
      borderWidth: 1,
      maxBarThickness: 12,
      hoverBackgroundColor: blue[800],
      hoverBorderColor: blue[900],
      data: [20, 25, 23, 30, 27, 55, 40,60,50,80],
    
    },
  ],
}

const Overview = () => {
  return (
    <Paper elevation={3} sx={{ p: 1.5 }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography component="h2" fontWeight="bold" fontSize={13}>
          Overview
        </Typography>

        <Typography fontSize={12}>
          Sort By:
          <Button size="small" endIcon={<ExpandMore />}>
            Yearly
          </Button>
        </Typography>
      </Box>

      <Grid container sx={{mt:1}}>
        <Grid item lg={4} xs={12}> 
          <Typography
            component="h3"
            variant="caption"
            sx={{ opacity: 0.5 }}
            fontWeight="bold"
          >
            This Month
          </Typography>

          {/* OverView SUbDetails.\------ */}


          <Box display="flex" gap={2} alignItems="center">
            <Typography component="h3" variant="h5" fontWeight="bold">
              $24,568
            </Typography>
            <Chip
              size="small"
              label="+ 2.85%"
              sx={{ bgcolor: "rgba(0,155,0, 0.1)", color: "green" }}
            />
          </Box>

          <Grid container p={2} sx={{height: "90%", }} alignContent={"center"}>

            <Grid item xs={6}
              p={1}
              sx={{ borderBottom: 0.5, borderColor: "rgba(0,0,0,0.2)" }}>
                  <Typography
                component="h3"fontSize="13px"
                sx={{ opacity: 0.7 }}
                fontWeight="bold"
              >
                Orders
              </Typography>

              <Typography component="h3" variant="body2" fontWeight="bold">
                5,643
              </Typography>


            </Grid>


            <Grid
              item
              xs={6}
              p={1}
              sx={{
                borderBottom: 1,
                borderLeft: 1,
                borderColor: "rgba(0,0,0,0.2)",
              }}
            >
              <Typography
                component="h3"fontSize="13px"
                sx={{ opacity: 0.7 }}
                fontWeight="bold"
              >
                Sales
              </Typography>
              <Typography component="h3" variant="body2" fontWeight="bold">
                12,273
              </Typography>

              
              
            </Grid>

            <Grid item xs={6} p={1} sx={{borderBottom:1,borderColor:"rgba(0,0,0,0.2)", }}>

              <Typography component="h3" fontSize="13px" fontWeight="bold"
              sx={{opacity:0.7}}>
                Order Value
              </Typography>

              <Typography fontWeight="bold" component="h3" variant="body2">
                12.03%
              </Typography>

            </Grid>

            <Grid item xs={6} p={1} sx={{borderBottom:1,borderLeft:1,borderColor:"rgba(0,0,0,0.2)" }}>

              <Typography component="h3" fontSize="13px" fontWeight="bold"
              sx={{opacity:0.7}}>
                Customers
              </Typography>

              <Typography fontWeight="bold" component="h3" variant="body2">
                21,456
              </Typography>

            </Grid>

            <Grid item xs={6} p={1} sx={{borderBottom:1,borderColor:"rgba(0,0,0,0.2)", }}>

              <Typography component="h3" fontSize="13px" fontWeight="bold"
              sx={{opacity:0.7}}>
                Income
              </Typography>

              <Typography fontWeight="bold" component="h3" variant="body2">
              $35,652
              </Typography>

            </Grid>

            <Grid item xs={6} p={1} sx={{borderBottom:1,borderLeft:1,borderColor:"rgba(0,0,0,0.2)" }}>

              <Typography component="h3"  fontWeight="bold" fontSize="13px"
              sx={{opacity:0.7}}>
                Expenses
              </Typography>

              <Typography fontWeight="bold" component="h3" variant="body2">
              $12,248
              </Typography>

            </Grid>

          </Grid>

         

        </Grid>

        {/* Bar Graph Section */}
        <Grid item lg={8} xs={12}>
          <Box sx={{maxWidth:"82vw", }}>
            <Bar data ={data}/>


          </Box>


        </Grid>
      </Grid>
    </Paper>
  );
};

export default Overview;

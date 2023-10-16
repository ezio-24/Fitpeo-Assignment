import ExpandMore from "@mui/icons-material/ExpandMore";
import { Button, Paper, Typography } from "@mui/material";
import { Box, color } from "@mui/system";
import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);



const UserActivity = () => {
  const data = {
    labels: ["January", "February", "March", "April"],
    datasets: [
      {
        label: "current",
        usePointStyle:"true",
        data: [40, 30, 62, 30, 45, 43],
        backgroundColor: "transparent",
        borderColor: "rgb(53, 162, 235)",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
      },
      {
        label: "previous",
        usePointStyle: true,
        data: [20, 50, 42, 75, 45, 47,30],
        backgroundColor: "transparent",
        borderColor: "orangered",
        pointBorderColor: "transparent",
        pointBorderWidth: 4,
        tension: 0.5,
        active:true,
      },
    ],
  };
 ;
  return (
    <Paper
      elevation={4}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        p:1.5
       
      }}
    >
      <Box alignItems="center" display="flex" justifyContent="space-between">
        <Typography componnet="h2" fontSize={14} fontWeight="bold" gutterBottom>
          User Activity
        </Typography>

        <Button size="small" endIcon={<ExpandMore />}>
          Weekly
        </Button>
      </Box>
      <Typography
        component="h3"
        variant="caption"
        sx={{ opacity: 0.6 }}
        fontWeight="bold"
      >
        This Month
      </Typography>

      <Typography component="h3" variant="h6" fontWeight="bold" gutterBottom>
        $16,453
      </Typography>

      <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
        <Line data={data} ></Line>
      </Box>
    </Paper>
  );
};

export default UserActivity;

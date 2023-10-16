import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/system/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Completed", "Pending", "cancel"],
  
  datasets: [
    {
      label: "No. of Orders",
      
      data: [3, 15, 4],
      weight: 0.1,
      backgroundColor: [
        "rgb(244,130,130)",
        "rgb(94,142,231)",
        "rgb(245,246,250)",
      ],
    
      borderWidth: 4,
    },
  ],
};

const OrderStats = () => {
  return (
    <Paper elevation={4} sx={{ p: 1.5, height: "100%" }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography component="h2" fontWeight="bold" fontSize={14} gutterBottom>
          Order Stats
        </Typography>
        <IconButton>
          <MoreHorizIcon />
        </IconButton>
      </Box>
      <Doughnut options={{ cutout: "70%", radius: "90%" }} data={data} />
    </Paper>
  );
};

export default OrderStats;

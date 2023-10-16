import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import Box from "@mui/system/Box";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { blue } from "@mui/material/colors";

const Guage = ({ value }) => {
  return (
    <Box sx={{ width: "50%", maxWidth: "160px", mt: 1, mb: 2.5 }}>
      <Box
        sx={{
          width: "100%",
          height: 0,
          paddingBottom: "50%",
          bgcolor: "rgba(180, 192, 190, 0.5)",
          position: "relative",
          borderTopLeftRadius: "100% 200%",
          borderTopRightRadius: "100% 200%",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            width: "inherit",
            height: "100%",
            bgcolor: blue[600],
            transformOrigin: "center top",
            transform: `rotate(0.${value / 2}turn)`,
            transition: "transform 0.2s ease-out",
          }}
        ></Box>
        <Box
          sx={{
            width: "90%",
            height: "180%",
            bgcolor: "background.paper",
            borderRadius: "50%",
            position: "absolute",
            top: "10%",
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center", mt: "22%" }}>
            {value}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

const Earning = () => {
  return (
    <Box p={2}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography component="h2" fontWeight={600} fontSize={15} gutterBottom>
          Earning
        </Typography>
        <IconButton>
          <InfoOutlinedIcon />
        </IconButton>
      </Box>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Guage value={76} />
        <Typography component="h6" variant="h5" fontWeight={600} sx={{}}>
          $26,256
        </Typography>
        <Typography component="h6" sx={{ opacity: 0.7 }}>
          Earning this Month
        </Typography>
        <Typography
          component="h6"
          sx={{ opacity: 0.6, mt: 1 }}
          fontWeight={600}
        >
          <Chip
            size="small"
            label="+ 2.65%"
            sx={{ bgcolor: "rgba(0,155,0, 0.1)", color: "green" }}
          />
          From previous period
        </Typography>
      </Box>
    </Box>
  );
};

export default Earning;

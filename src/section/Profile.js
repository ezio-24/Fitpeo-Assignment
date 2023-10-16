import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/system/Box";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import background_pic from "../avatar/bg_pic.png";
import profileImg from "../avatar/avatar.png";
import Earning from "./Earning";
import RecentActivity from "./RecentActivity";

const Profile = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        height: "100%",
      }}
    >
      <Box
        sx={{
          borderRadius: "inherit",
          height: "8rem",
          background: `url(${background_pic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100% 78%",
          position: "relative",
          mb: 2,
        }}
      >
        <IconButton sx={{ color: "#fff", float: "right" }}>
          <MoreHorizIcon />
        </IconButton>

        <Avatar
          alt="Profile img"
          src={profileImg}
          sx={{
            width: 60,
            height: 60,
            border: 4,
            borderColor: "background.paper",
            position: "absolute",
            bottom: 0,
            left: "50%",
            transform: "translate(-50%)",
          }}
        />
      </Box>
      <Typography
        variant="h5"
        component="h2"
        textAlign="center"
        fontWeight={600}
      >
    Prem Sardhan
        <br style={{ border: "1px solid red", margin: "40px" }} />
      </Typography>
      <Typography variant="body2" textAlign="center" sx={{ opacity: 0.8 }}>
        Full Stack Developer
      </Typography>

      <Box py={3} display="flex" justifyContent={"center"}>
        <Typography
          variant="body2"
          textAlign="center"
          fontWeight={600}
          sx={{ width: "50%" }}
        >
          1,269
          <br />
          <span style={{ opacity: 0.5 }}>Products</span>
        </Typography>
        <Divider orientation="vertical" flexItem />
        <Typography
          variant="body2"
          textAlign="center"
          fontWeight={600}
          sx={{ width: "50%" }}
        >
          5.2k
          <br />
          <span style={{ opacity: 0.5 }}>Followers</span>
        </Typography>
      </Box>

      <Divider variant="middle" />
      <Earning />
      <Divider variant="middle" />
      <RecentActivity />
    </Paper>
  );
};

export default Profile;

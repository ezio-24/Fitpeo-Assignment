import {useState} from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";


let theme = createTheme({
  typography: {
    fontSize: 12,
    fontFamily: ["Rubik", "sans-serif"].join(","),
  },
  shape: {
    borderRadius: 10,
  },
});

theme = {
  ...theme,
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#101F33",
        },
      },
    },
  },
};

const sidebarWidth = 246;

const Home = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#eaeff1" }}>
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { sm: sidebarWidth }, flexShrink: { sm: 0 } }}
        >
          {isSmUp ? null : (
            <Sidebar
              PaperProps={{ style: { width: sidebarWidth } }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
            />
          )}

          <Sidebar
            PaperProps={{ style: { width: sidebarWidth } }}
            sx={{ display: { sm: "block", xs: "none" } }}
          />
        </Box>
        <Box sx={{ flex: 1, display: "flex", flexDirection: "column" }}>
          <Navbar onDrawerToggle={handleDrawerToggle} />
          <Dashboard />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Home;

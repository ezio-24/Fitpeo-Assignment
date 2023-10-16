import Grid from "@mui/material/Grid";
import Customers from "../section/Customers";
import Orders from "../section/Orders";
import OrderStats from "../section/OrderStats";
import Overview from "../section/Overview";
import Profile from "../section/Profile";
import Revenue from "../section/Revenue";
import TopProducts from "../section/TopProducts";
import UserActivity from "../section/UserActivity";
;

const Dashboard = () => {
  return (
    <>
      <Grid container px={1} py={2}>
        <Grid item lg={9} xs={12}>
          <Grid container sx={{ height: "100%" }}>
            <Grid item lg={4} xs={12} p={1}>
              <Revenue />
            </Grid>
            <Grid item lg={4} xs={12} p={1}>
              <Orders />
            </Grid>
            <Grid item lg={4} xs={12} p={1}>
              <Customers />
            </Grid>
            <Grid item lg={12} xs={12} p={1}>
              <Overview />
            </Grid>
            <Grid item lg={4} xs={12} p={1}>
              <UserActivity />
            </Grid>
            <Grid item lg={4} xs={12} p={1}>
              <OrderStats />
            </Grid>
            <Grid item lg={4} xs={12} p={1}>
              <TopProducts />
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={3} xs={12} p={1}>
          <Profile />
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;

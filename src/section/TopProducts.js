import Typography from "@mui/material/Typography";

import { blue } from "@mui/material/colors";
import { Divider } from "@mui/material";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Chip from "@mui/material/Chip";

const listData = [
  {
    avatarName: "#1",
    primaryText: "polo Blue T-shirt",
    secondaryText: "$ 25.4",
    quantity: "3.82k",
  },
  {
    avatarName: "#2",
    primaryText: "Hoodie for men",
    secondaryText: "$ 24.5",
    quantity: "3.14k",
  },
  {
    avatarName: "#3",
    primaryText: "Red Color Cap",
    secondaryText: "$ 22.5",
    quantity: "2.06k",
  },
  {
    avatarName: "#4",
    primaryText: "Black T-shirt",
    secondaryText: "$ 22.6",
    quantity: "2.15k",
  },
];

const TopProducts = () => {
  return (
    <Paper elevation={4} sx={{ p: 1.5, height: "100%" }}>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography component="h2" fontWeight="bold" fontSize={14} gutterBottom>
          Top Products
        </Typography>

        <Button size="small" endIcon={<ExpandMore />}>
          Monthly
        </Button>
      </Box>
      <List disablePadding>
        {listData.map((item, index) => (
          <>
            <ListItem
              key={item.avatarName}
              disableGutters
              disablePadding
              sx={{ mt: 0.7 }}
              secondaryAction={<Chip size="small" label={item.quantity} />}
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: blue[500] }} variant="rounded">
                  {item.avatarName}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <span style={{ opacity: 0.8 }}>{item.primaryText}</span>
                }
                secondary={<strong>{item.secondaryText}</strong>}
              />
            </ListItem>
            {index === listData.length - 1 ? null : <Divider />}
          </>
        ))}
      </List>
    </Paper>
  );
};

export default TopProducts;

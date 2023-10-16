import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import { Divider } from "@mui/material";

const listData = [
  {
    date: 12,
    month: "September",
    content: 'Responded to need "Volunteer Activities"',
  },
  {
    date: 11,
    month: "September",
    content: "Everyone realizes would be desirable...",
  },
  {
    date: 10,
    month: "September",
    content: 'Joined the group "Boardsmanship Forum"',
  },
];

const RecentActivity = () => {
  return (
    <Box p={2}>
      <Typography component="h2" fontWeight={600} fontSize={15} gutterBottom>
        Recent Activity
      </Typography>

      <List disablePadding>
        {listData.map((item, index) => (
          <>
            <ListItem key={item.date} disableGutters dense>
              <ListItemAvatar>
                <Avatar
                  variant="rounded"
                  sx={{ color: "#212121", textAlign: "center", fontSize: 14 }}
                >
                  {item.date}
                  <br />
                  {item.month.slice(0, 3)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{ variant: "body2" }}
                primary={
                  index === 1 ? (
                    <>
                      {item.content}{" "}
                      <Link href="#" underline="always">
                        Read more
                      </Link>
                    </>
                  ) : (
                    item.content
                  )
                }
              />
            </ListItem>
            {index === listData.length - 1 ? null : <Divider />}
          </>
        ))}
      </List>
    </Box>
  );
};

export default RecentActivity;

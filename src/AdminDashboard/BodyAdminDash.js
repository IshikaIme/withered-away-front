import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { makeStyles } from "@material-ui/styles";
import InventoryIcon from "@mui/icons-material/Inventory";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import PermContactCalendarRoundedIcon from "@mui/icons-material/PermContactCalendarRounded";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import CardsAdmin from "./CardsAdmin";
const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
      backgroundcolor: "red",
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}*px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
  background: "rgba(0, 0, 0, 0.7)",
}));

const useStyles = makeStyles((theme) => ({
  page: {
    fontFamily: "Courgette",
  },
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // backgroundImage: `url(${bg})`,
  },
  tool: {
    background: "black",
  },
  bar: {
    background: "black",
  },
  paper: {
    background: "blue",
  },
  clockstyle: {
    alignItems: "right",
    marginLeft: "10rem",
    marginTop: "20rem",
  },

  colortext: {
    // color: "	#800000",
    color: "red",
  },
  title: {
    color: "#fff",
    fontSize: "5rem",
    marginBottom: "0 auto ",
  },

  container: {
    textAlign: "center",
  },
  dd: {
    background: "#f1f1f1",
  },
  listitem: {},
}));

// function tick() {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
//   setTimeout(tick, 1000);
// }

// setTimeout(tick, 1000);

export default function BodyAdminDash() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const Logoutfunction = () => {
		localStorage.removeItem("accessToken");
		// console.log(localStorage.getItem("accessToken"));
  };

  return (
    <div className={classes.page}>
      <Box className={classes.root} sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open} className={classes.bar}>
          <Toolbar className={classes.tool}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Dashboard
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.dd}
          containerStyle={{ backgroundColor: "black" }}
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>

          <List className={classes.list}>
            {/* {itemsList.map((item, index) => {
              const { text, icon, onClick } = item;
              return (
                <ListItem button key={text} onClick={onClick}>
                  {icon && <ListItemIcon>{icon}</ListItemIcon>}
                  <ListItemText primary={text} />
                </ListItem>
              );
            })} */}

            <ListItem className={classes.list} button key="Go To Dashboard">
              {<DashboardRoundedIcon /> && (
                <ListItemIcon>
                  <DashboardRoundedIcon />
                </ListItemIcon>
              )}
              <a href="/CallAdminDash">
                {" "}
                <ListItemText primary="Go To Dashboard" />
              </a>
            </ListItem>

            <ListItem className={classes.list} button key="Show Tables">
              {<AdminPanelSettingsRoundedIcon /> && (
                <ListItemIcon>
                  {" "}
                  <AdminPanelSettingsRoundedIcon />{" "}
                </ListItemIcon>
              )}
              <a href="/CallShowTableAdmin">
                {" "}
                <ListItemText primary="Show Tables" />
              </a>
            </ListItem>

            <ListItem className={classes.list} button key="Inventory">
              {<InventoryIcon /> && (
                <ListItemIcon>
                  <InventoryIcon />
                </ListItemIcon>
              )}

              <a href="/CallInventory">
                {" "}
                <ListItemText primary="Inventory" />
              </a>
            </ListItem>

            <ListItem
              className={classes.list}
              button
              key="Log Out"
              onClick={Logoutfunction}
            >
              {<LogoutIcon /> && (
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
              )}
              <Divider />
              <a href="/LoginPage">
                {" "}
                <ListItemText primary="Log Out" />
              </a>
            </ListItem>
          </List>
        </Drawer>
        <Main className={classes.main} open={open}></Main>
      </Box>
    </div>
  );
}

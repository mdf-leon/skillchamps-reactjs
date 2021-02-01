import React from "react";
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  MenuItem,
  // Menu,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MoreIcon from '@material-ui/icons/More';

// import Drawer from '../Drawer';

import { useWindowSize } from "hooks";
import { base } from "config/api";

import ManageButton from "./manageButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: "auto",
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: "block",
      // [theme.breakpoints.up('sm')]: {
      //   display: 'block',
      // },
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    typography: {
      padding: theme.spacing(2),
    },
    customBadgeManager: {
      backgroundColor: "#3f51b5",
      color: "white",
    },
    customBadgeRider: {
      backgroundColor: "#f50057",
      color: "white",
    },
  })
);

export default function AppBarComponent(props: any) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [
    anchorNotification,
    setAnchorNotification,
  ] = React.useState<null | HTMLElement>(null);

  const events: any[] =
    JSON.parse(localStorage.getItem("events_on_management") || "[]") || [];

  React.useEffect(() => {
    base
      .get(`/managedEventsList`)
      .then((r) => {
        localStorage.setItem("events_on_management", JSON.stringify(r.data));
      })
      .catch(() => {});
  }, []);

  // Popover
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickNotification = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorNotification(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCloseNotification = () => {
    setAnchorNotification(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const openNotification = Boolean(anchorNotification);
  const idNotification = open ? "simple-popover" : undefined;
  // Popover

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [width, height] = useWindowSize();
  // const [
  //   mobileMoreAnchorEl,
  //   setMobileMoreAnchorEl,
  // ] = React.useState<null | HTMLElement>(null);

  // const isMenuOpen = Boolean(anchorEl);
  // const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleMobileMenuClose = () => {
  //   setMobileMoreAnchorEl(null);
  // };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  // const menuId = "primary-search-account-menu";
  // const renderMenu = (
  //   <Menu
  //     anchorEl={anchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={menuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMenuOpen}
  //     onClose={handleMenuClose}
  //   >
  //     <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
  //     <MenuItem onClick={handleMenuClose}>My account</MenuItem>
  //   </Menu>
  // );

  // const mobileMenuId = "primary-search-account-menu-mobile";
  // const renderMobileMenu = (
  //   <Menu
  //     anchorEl={mobileMoreAnchorEl}
  //     anchorOrigin={{ vertical: "top", horizontal: "right" }}
  //     id={mobileMenuId}
  //     keepMounted
  //     transformOrigin={{ vertical: "top", horizontal: "right" }}
  //     open={isMobileMenuOpen}
  //     onClose={handleMobileMenuClose}
  //   >
  //     <MenuItem>
  //       <IconButton aria-label="show 4 new mails" color="inherit">
  //         <Badge badgeContent={4} color="secondary">
  //           <MailIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Messages</p>
  //     </MenuItem>
  //     <MenuItem>
  //       <IconButton aria-label="show 11 new notifications" color="inherit">
  //         <Badge badgeContent={11} color="secondary">
  //           <NotificationsIcon />
  //         </Badge>
  //       </IconButton>
  //       <p>Notifications</p>
  //     </MenuItem>
  //     <MenuItem onClick={handleProfileMenuOpen}>
  //       <IconButton
  //         aria-label="account of current user"
  //         aria-controls="primary-search-account-menu"
  //         aria-haspopup="true"
  //         color="inherit"
  //       >
  //         <AccountCircle />
  //       </IconButton>
  //       <p>Profile</p>
  //     </MenuItem>
  //   </Menu>
  // );

  const [openState, setopenState] = React.useState(false);

  const toggleDrawer = (open?: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    if (open) setopenState(open);
    else setopenState(!openState);
  };

  const DrawerComponent: any = () => (
    <div>
      <React.Fragment key={"anchor"}>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <Drawer anchor={"left"} open={openState} onClose={toggleDrawer(false)}>
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem
                button
                key={"<MenuIcon />"}
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>
                  <MenuIcon />
                </ListItemIcon>
              </ListItem>
              <ListItem // cada um desse é um link
                button
                key="appbar-menu-0"
                onClick={() => {
                  localStorage.removeItem("token");
                  window.location.reload();
                }}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Log off"} />
              </ListItem>
              <ListItem // cada um desse é um link
                button
                key="appbar-menu-10"
                onClick={() => props.history.push("/")}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Landing page"} />
              </ListItem>
              {/* <ListItem // cada um desse é um link
                button
                key="appbar-menu-0"
                onClick={() => props.history.push("/newInstitute")}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"New Institute"} />
              </ListItem> */}
              <ListItem // cada um desse é um link
                button
                key="appbar-menu-20"
                onClick={() => props.history.push("/eventOptions")}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Event Options"} />
              </ListItem>
              <ListItem // cada um desse é um link
                button
                key="appbar-menu-30"
                onClick={() => props.history.push("/manageableEvents")}
              >
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={"Event List"} />
              </ListItem>
            </List>
            <Divider />
            <ListItem // cada um desse é um link
              button
              key="appbar-menu-40"
              onClick={() => props.history.push("/beforeResult")}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={"Final Results"} />
            </ListItem>
            {/* <List>
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
            </List> */}
          </div>
        </Drawer>
      </React.Fragment>
    </div>
  );

  const buttonManage = (
    variant: "text" | "outlined" | "contained" | undefined = "outlined",
    color:
      | "inherit"
      | "primary"
      | "secondary"
      | "default"
      | undefined = "default",
    buttonStyleColor: string = ""
  ) => {
    return (
      <div>
        {events[0] && (
          <div>
            <Button
              style={{ color: buttonStyleColor, borderColor: buttonStyleColor }}
              aria-describedby={id}
              variant={variant}
              color={color}
              onClick={handleClick}
            >
              {props.popoverTitle}
            </Button>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
            >
              <ManageButton {...props} events={events} />
            </Popover>
          </div>
        )}
      </div>
    );
  };

  const arr: any[] = [
    {
      type: "created",
      subject: "event",
      title: "%%Admin created an event",
      message: 'The event: "%%Evento" is now accessible to administration.',
      sent_at: "2021-01-24T21:43:46.233Z",
    },
    {
      type: "published",
      subject: "event",
      title: "%%Admin published %%Evento",
      message: '"%%Evento" was published! Any rider can now participate!',
      sent_at: "2021-01-24T21:49:50.211Z",
    },
    {
      type: "deleted",
      subject: "event",
      title: "%%Admin deleted %%Evento",
      message:
        "If this was unintentional, the Administrator can revert within 24h of the action.",
      sent_at: "2021-01-24T21:53:35.963Z",
    },
    {
      type: "subscription",
      subject: "rider",
      title: "%%Rider subscribed to an event",
      message: "%%Rider wishes to participate in %%Evento.",
      sent_at: "2021-01-24T21:53:35.963Z",
    },
    {
      type: "paid",
      subject: "rider",
      title: "%%Rider signed to an event",
      message: "%%Rider paid and is ready to participate in %%Evento.",
      sent_at: "2021-01-24T22:04:04.300Z",
    },
    {
      type: "accepted",
      subject: "rider",
      title: "%%Admin accepted %%Rider",
      message: "%%Rider is officially participating in %%Evento.",
      sent_at: "2021-01-24T22:06:03.416Z",
    },
  ];

  const buttonNotification = () => {
    return (
      <div style={{ padding: "6px 16px" }}>
        <IconButton
          onClick={handleClickNotification}
          aria-label="show 11 new notifications"
          // style={{ color: 'white', backgroundColor: 'white' }}
        >
          <Badge
            badgeContent={11}
            classes={{
              badge: props.isManager
                ? classes.customBadgeManager
                : classes.customBadgeRider,
            }}
            // style={{ color: 'red', backgroundColor: 'white' }}
          >
            <NotificationsIcon
              style={{ color: props.isManager ? "white" : "#3f51b5" }} //color={'primary'}
            />
          </Badge>
        </IconButton>
        <Popover
          id={idNotification}
          open={openNotification}
          anchorEl={anchorNotification}
          onClose={handleCloseNotification}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <div style={{ padding: "20px", minWidth: "350px" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h6" component="h6">
                Notifications
              </Typography>
              <Typography color="textSecondary" variant="h6" component="h6">
                {props.ntfQuantity || "0"}
              </Typography>
            </div>
            <Divider />
            {arr.map((content) => {
              return (
                <>
                  <div className="d-flex" style={{ alignItems: "center" }}>
                    <div>
                      <MailOutlineIcon />
                    </div>
                    <div
                      style={{
                        margin: "10px",
                        paddingLeft: "10px",
                        borderLeft: "1px solid rgba(0, 0, 0, 0.12)",
                      }}
                    >
                      <Typography variant="h6" component="h6">
                        {content.title}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        component="h6"
                      >
                        {content.message}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="subtitle2"
                        component="h6"
                      >
                        {content.sent_at}
                      </Typography>
                    </div>
                  </div>
                  <Divider />
                </>
              );
            })}
          </div>
        </Popover>
      </div>
    );
  };

  const topBarMenusDesktop = (
    <div style={{ display: "contents" }}>
      {props.hasManageMenu && events[0] && buttonManage(undefined, "secondary")}
      {buttonNotification()}
      {/* <MenuItem>
        <IconButton
          aria-label="show 11 new notifications"
          // style={{ color: 'white', backgroundColor: 'white' }}
        >
          <Badge
            badgeContent={11}
            classes={{
              badge: props.isManager
                ? classes.customBadgeManager
                : classes.customBadgeRider,
            }}
            // style={{ color: 'red', backgroundColor: 'white' }}
          >
            <NotificationsIcon
              style={{ color: props.isManager ? "white" : "#3f51b5" }} //color={'primary'}
            />
          </Badge>
        </IconButton>
      </MenuItem> */}
    </div>
  );

  const topBarMenusMobile = (
    <div style={{ display: "contents" }}>
      {props.hasManageMenu &&
        events[0] &&
        buttonManage(undefined, undefined, "white")}
    </div>
  );

  return (
    <div className={classes.grow}>
      <DrawerComponent />
      <AppBar
        color={
          props.isManager
            ? "secondary"
            : width < 600
            ? "primary"
            : "transparent"
          // : width < 600
          // ? undefined
          // : props.isManager
          // ? 'secondary'
          // : 'transparent'
        }
        position="static"
      >
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            {props.title || "no title"}
          </Typography>
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}
          <div className={classes.grow} />
          {/* <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div> */}
          {/* <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div> */}
          {width >= 600 ? topBarMenusDesktop : topBarMenusMobile}
          {/* {menuDeskAndMobile} */}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </div>
  );
}

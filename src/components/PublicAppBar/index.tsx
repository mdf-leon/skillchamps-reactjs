/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import {
  fade,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core/styles';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Badge,
  // MenuItem,
  // Menu,
  Drawer,
  Button,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Popover,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
// import AccountCircle from "@material-ui/icons/AccountCircle";
// import MailIcon from "@material-ui/icons/Mail";
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import MailOutlineIcon from '@material-ui/icons/MailOutline';
import DashboardIcon from '@material-ui/icons/Dashboard';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import HomeIcon from '@material-ui/icons/Home';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
// import MoreIcon from '@material-ui/icons/More';

// import Drawer from '../Drawer';

import { useWindowSize } from 'hooks';
import { base } from 'config/api';

import ManageButton from './manageButton';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      display: 'block',
      // [theme.breakpoints.up('sm')]: {
      //   display: 'block',
      // },
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
    typography: {
      padding: theme.spacing(2),
    },
    customBadgeManager: {
      backgroundColor: '#3f51b5',
      color: 'white',
    },
    customBadgeRider: {
      backgroundColor: '#f50057',
      color: 'white',
    },
  })
);

export default function AppBarComponent(props: any) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notificationsList, setnotificationsList] = React.useState<any[]>([]);
  const [
    anchorNotification,
    setAnchorNotification,
  ] = React.useState<null | HTMLElement>(null);

  const events: any[] =
    JSON.parse(localStorage.getItem('events_on_management') || '[]') || [];

  React.useEffect(() => {
    base
      .get(`/managedEventsList`)
      .then((r) => {
        localStorage.setItem('events_on_management', JSON.stringify(r.data));
      })
      .catch(() => {});

    if (props.isManager && props.eventBeingManaged) {
      if (props.eventBeingManaged) {
        base
          .get(`/notifications?event_id=${props.eventBeingManaged}`)
          .then((r) => {
            setnotificationsList(r.data);
          })
          .catch(() => {});
      } else {
        base
          .get(
            `/notifications?institute_id=${
              JSON.parse(localStorage.getItem('institute_info') || '').id
            }`
          )
          .then((r) => {
            setnotificationsList(r.data);
          })
          .catch(() => {});
      }
    } else {
      base
        .get(`/notifications`)
        .then((r) => {
          setnotificationsList(r.data);
        })
        .catch(() => {});
    }
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
  const id = open ? 'simple-popover' : undefined;

  const openNotification = Boolean(anchorNotification);
  const idNotification = open ? 'simple-popover' : undefined;
  // Popover

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [width, height] = useWindowSize();

  const [openState, setopenState] = React.useState(false);

  const toggleDrawer = (open?: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    if (open) setopenState(open);
    else setopenState(!openState);
  };

  const DrawerComponent: any = () => (
    <div>
      <React.Fragment key={'anchor'}>
        {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
        <Drawer anchor={'left'} open={openState} onClose={toggleDrawer(false)}>
          <div
            className={classes.list}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              <ListItem
                button
                key={'<MenuIcon />'}
                onClick={toggleDrawer(false)}
              >
                <ListItemIcon>
                  <MenuIcon />
                </ListItemIcon>
              </ListItem>
            </List>
            <Divider />
            <ListItem // cada um desse é um link
              button
              key="appbar-menu-40"
              onClick={() => props.history.push('/')}
            >
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={'Final Results'} />
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
    variant: 'text' | 'outlined' | 'contained' | undefined = 'outlined',
    color:
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'default'
      | undefined = 'default',
    buttonStyleColor: string = ''
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
                vertical: 'bottom',
                horizontal: 'center',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'center',
              }}
            >
              <ManageButton {...props} events={events} />
            </Popover>
          </div>
        )}
      </div>
    );
  };

  const topBarMenusDesktop = (
    <div style={{ display: 'contents' }}>
      {props.hasManageMenu && events[0] && buttonManage(undefined, 'secondary')}
    </div>
  );

  const topBarMenusMobile = (
    <div style={{ display: 'contents' }}>
      {props.hasManageMenu &&
        events[0] &&
        buttonManage(undefined, undefined, 'white')}
    </div>
  );

  return (
    <div className={classes.grow}>
      {/* <DrawerComponent /> */}
      <AppBar
        color={
          props.isManager
            ? 'secondary'
            : width < 600
            ? 'primary'
            : 'transparent'
          // : width < 600
          // ? undefined
          // : props.isManager
          // ? 'secondary'
          // : 'transparent'
        }
        position="static"
      >
        <Toolbar>
          {props.backButton ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => props.history.push(props.backButton.path)}
            >
              <ArrowBackIcon />
            </IconButton>
          ) : (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="open drawer"
              onClick={() => props.history.push('/')}
            >
              <HomeIcon />
            </IconButton>
          )}
          <Typography
            className={classes.title}
            style={{ textAlign: 'center', width: '100%' }}
            variant="h6"
            noWrap
          >
            {props.title || 'no title'}
          </Typography>
          <div className={classes.grow} />
          {width >= 600 ? topBarMenusDesktop : topBarMenusMobile}
          {localStorage.getItem('token') ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Dashboard"
              onClick={() => props.history.push('/login')}
            >
              <DashboardIcon />
            </IconButton>
          ) : null}
        </Toolbar>
      </AppBar>
      {/* {renderMobileMenu} */}
      {/* {renderMenu} */}
    </div>
  );
}



// import React from "react";
// import { styled, useTheme, alpha } from "@mui/material/styles";
// import MuiAppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import InputBase from "@mui/material/InputBase";
// import SearchIcon from "@mui/icons-material/Search";
// import { Box, Stack, Typography, Button } from "@mui/material";  
// import { LightModeOutlined } from "@mui/icons-material";
// import SettingsIcon from "@mui/icons-material/Settings";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
// import PersonIcon from "@mui/icons-material/Person";
// import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';  
// import { Link, useNavigate } from "react-router-dom";  

 
// import { useAuth } from "./context/AuthContext"; 

// const drawerWidth = 240;

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));
// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     width: "100%",
//     [theme.breakpoints.up("md")]: {
//       width: "20ch",
//     },
//   },
// }));

// const AppBar = styled(MuiAppBar, {
//   shouldForwardProp: (prop) => prop !== "open",
// })(({ theme }) => ({
//   zIndex: theme.zIndex.drawer + 1,
//   transition: theme.transitions.create(["width", "margin"], {
//     easing: theme.transitions.easing.sharp,
//     duration: theme.transitions.duration.leavingScreen,
//   }),
//   variants: [
//     {
//       // @ts-ignore
//       props: ({ open }) => open,
//       style: {
//         marginLeft: drawerWidth,
//         width: `calc(100% - ${drawerWidth}px)`,
//         transition: theme.transitions.create(["width", "margin"], {
//           easing: theme.transitions.easing.sharp,
//           duration: theme.transitions.duration.enteringScreen,
//         }),
//       },
//     },
//   ],
// }));

// export default function TopBar({ open, handleDrawerOpen, setMode }) {
//   const theme = useTheme();
//   const navigate = useNavigate();
  
//   const { currentUser, logOut } = useAuth();
  
   
//   const handleSignOut = async () => {
//     try {
//       await logOut();
//       navigate("/signin"); 
//     } catch (error) {
//       console.error("Failed to sign out:", error);
//     }
//   };

//   return (
//     <AppBar 
//       position="fixed" 
//       // @ts-ignore
//       open={open}
//     >
//       <Toolbar>
//         <IconButton
//           color="inherit"
//           aria-label="open drawer"
//           onClick={handleDrawerOpen}
//           edge="start"
//           sx={[
//             {
//               marginRight: 5,
//             },
//             open && { display: "none" },
//           ]}
//         >
//           <MenuIcon />
//         </IconButton>
        
        
//         <Search>
//           <SearchIconWrapper>
//             <SearchIcon />
//           </SearchIconWrapper>
//           <StyledInputBase
//             placeholder="Search…"
//             inputProps={{ "aria-label": "search" }}
//           />
//         </Search>
        
        
//         <Box flexGrow={1} />
        
       
//         {currentUser ? (
           
//             <Stack direction="row" spacing={2} alignItems="center">
//                 <Typography variant="h6" color="inherit" sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}>
//                   Welcome, {currentUser.displayName || currentUser.email.split('@')[0]}
//                 </Typography>
                
              
//                 <Button 
//                     variant="contained" 
//                     color="error" 
//                     onClick={handleSignOut}
//                     startIcon={<LogoutOutlinedIcon />}
//                     sx={{ textTransform: 'none' }}
//                 >
//                     Sign Out
//                 </Button>
//             </Stack>

//         ) : (
           
//             <Stack direction="row" spacing={2} alignItems="center">
//                 <Link to="/register" style={{ textDecoration: "none" }}>
//                     <Button variant="outlined" color="inherit">
//                         Register
//                     </Button>
//                 </Link>
//                 <Link to="/signin" style={{ textDecoration: "none" }}>
//                     <Button variant="contained" color="inherit">
//                         Sign In
//                     </Button>
//                 </Link>
//             </Stack>
//         )}
        
 
//         <Stack direction="row" spacing={2} sx={{ ml: 3 }}>
//           {theme.palette.mode === "light" ? (
//             <IconButton
//               onClick={() => {
//                 localStorage.setItem(
//                   "currentMode",
//                   theme.palette.mode === "light" ? "dark" : "light"
//                 );

//                 setMode((preMode) => (preMode === "light" ? "dark" : "light"));
//               }}
//               color="inherit"
//             >
//               <LightModeOutlined />
//             </IconButton>
//           ) : (
//             <IconButton
//               onClick={() => {
//                 localStorage.setItem(
//                   "currentMode",
//                   theme.palette.mode === "light" ? "dark" : "light"
//                 );

//                 setMode((preMode) => (preMode === "light" ? "dark" : "light"));
//               }}
//               color="inherit"
//             >
//               <DarkModeIcon />
//             </IconButton>
//           )}

//           <IconButton color="inherit">
//             <SettingsIcon />
//           </IconButton>
//         </Stack>
//       </Toolbar>
//     </AppBar>
//   );
// }




import React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Stack, Typography, Button, Menu, MenuItem } from "@mui/material";  
import { LightModeOutlined } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PersonIcon from "@mui/icons-material/Person";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';  
import MoreIcon from '@mui/icons-material/MoreVert';
import { Link, useNavigate } from "react-router-dom";  
import { useAuth } from "./context/AuthContext"; 

const drawerWidth = 240;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  [theme.breakpoints.down("md")]: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function TopBar({ open, handleDrawerOpen, setMode }) {
  const theme = useTheme();
  const navigate = useNavigate();
  const { currentUser, logOut } = useAuth();
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/signin"); 
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  // Mobile menu
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ display: { xs: 'block', md: 'none' } }}
    >
      {currentUser ? (
        <div>
          <MenuItem>
            <Typography variant="body1" color="inherit">
              Welcome, {currentUser.displayName || currentUser.email.split('@')[0]}
            </Typography>
          </MenuItem>
          <MenuItem onClick={handleSignOut}>
            <IconButton color="inherit">
              <LogoutOutlinedIcon />
            </IconButton>
            <p>Sign Out</p>
          </MenuItem>
        </div>
      ) : (
        <div>
          <MenuItem component={Link} to="/register">
            <Button variant="outlined" color="primary" fullWidth>
              Register
            </Button>
          </MenuItem>
          <MenuItem component={Link} to="/signin">
            <Button variant="contained" color="primary" fullWidth>
              Sign In
            </Button>
          </MenuItem>
        </div>
      )}
      
      <MenuItem>
        <IconButton
          onClick={() => {
            localStorage.setItem(
              "currentMode",
              theme.palette.mode === "light" ? "dark" : "light"
            );
            setMode((preMode) => (preMode === "light" ? "dark" : "light"));
          }}
          color="inherit"
        >
          {theme.palette.mode === "light" ? <LightModeOutlined /> : <DarkModeIcon />}
        </IconButton>
        <p>Theme</p>
      </MenuItem>
      
      <MenuItem>
        <IconButton color="inherit">
          <SettingsIcon />
        </IconButton>
        <p>Settings</p>
      </MenuItem>
    </Menu>
  );

  return (
    <AppBar position="fixed" open={open}>
      <Toolbar sx={{ 
        padding: { xs: 1, sm: 2 },
        minHeight: { xs: 56, sm: 64 }
      }}>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: { xs: 1, sm: 2, md: 5 },
            ...(open && { display: "none" }),
          }}
        >
          <MenuIcon />
        </IconButton>
        
        {/* Search Bar */}
        <Search sx={{ flex: { xs: 1, sm: 'none' } }}>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        
        <Box flexGrow={1} />
        
        {/* Desktop View */}
        <Stack 
          direction="row" 
          spacing={2} 
          alignItems="center"
          sx={{ display: { xs: 'none', md: 'flex' } }}
        >
          {currentUser ? (
            <>
              <Typography 
                variant="h6" 
                color="inherit" 
                sx={{ 
                  mr: 1, 
                  display: { xs: 'none', lg: 'block' },
                  fontSize: { md: '0.9rem', lg: '1rem' }
                }}
              >
                Welcome, {currentUser.displayName || currentUser.email.split('@')[0]}
              </Typography>
              
              <Button 
                variant="contained" 
                color="error" 
                onClick={handleSignOut}
                startIcon={<LogoutOutlinedIcon />}
                sx={{ 
                  textTransform: 'none',
                  fontSize: { md: '0.8rem', lg: '0.9rem' }
                }}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <Button 
                  variant="outlined" 
                  color="inherit"
                  sx={{ textTransform: 'none' }}
                >
                  Register
                </Button>
              </Link>
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Button 
                  variant="contained" 
                  color="inherit"
                  sx={{ textTransform: 'none' }}
                >
                  Sign In
                </Button>
              </Link>
            </>
          )}
        </Stack>

        {/* Desktop Icons */}
        <Stack 
          direction="row" 
          spacing={1} 
          sx={{ 
            ml: 2, 
            display: { xs: 'none', md: 'flex' } 
          }}
        >
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "currentMode",
                theme.palette.mode === "light" ? "dark" : "light"
              );
              setMode((preMode) => (preMode === "light" ? "dark" : "light"));
            }}
            color="inherit"
          >
            {theme.palette.mode === "light" ? <LightModeOutlined /> : <DarkModeIcon />}
          </IconButton>

          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
        </Stack>

        {/* Mobile Menu Button */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            aria-label="show more"
            aria-controls={mobileMenuId}
            aria-haspopup="true"
            onClick={handleMobileMenuOpen}
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </Box>
      </Toolbar>
      
      {renderMobileMenu}
    </AppBar>
  );
}
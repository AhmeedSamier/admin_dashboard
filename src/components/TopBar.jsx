

import React from "react";
import { styled, useTheme, alpha } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Stack, Typography, Button } from "@mui/material";  
import { LightModeOutlined } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import PersonIcon from "@mui/icons-material/Person";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';  
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      // @ts-ignore
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

export default function TopBar({ open, handleDrawerOpen, setMode }) {
  const theme = useTheme();
  const navigate = useNavigate();
  
  const { currentUser, logOut } = useAuth();
  
   
  const handleSignOut = async () => {
    try {
      await logOut();
      navigate("/signin"); 
    } catch (error) {
      console.error("Failed to sign out:", error);
    }
  };

  return (
    <AppBar 
      position="fixed" 
      // @ts-ignore
      open={open}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={[
            {
              marginRight: 5,
            },
            open && { display: "none" },
          ]}
        >
          <MenuIcon />
        </IconButton>
        
        
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        
        
        <Box flexGrow={1} />
        
       
        {currentUser ? (
           
            <Stack direction="row" spacing={2} alignItems="center">
                <Typography variant="h6" color="inherit" sx={{ mr: 1, display: { xs: 'none', sm: 'block' } }}>
                  Welcome, {currentUser.displayName || currentUser.email.split('@')[0]}
                </Typography>
                
              
                <Button 
                    variant="contained" 
                    color="error" 
                    onClick={handleSignOut}
                    startIcon={<LogoutOutlinedIcon />}
                    sx={{ textTransform: 'none' }}
                >
                    Sign Out
                </Button>
            </Stack>

        ) : (
           
            <Stack direction="row" spacing={2} alignItems="center">
                <Link to="/register" style={{ textDecoration: "none" }}>
                    <Button variant="outlined" color="inherit">
                        Register
                    </Button>
                </Link>
                <Link to="/signin" style={{ textDecoration: "none" }}>
                    <Button variant="contained" color="inherit">
                        Sign In
                    </Button>
                </Link>
            </Stack>
        )}
        
 
        <Stack direction="row" spacing={2} sx={{ ml: 3 }}>
          {theme.palette.mode === "light" ? (
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
              <LightModeOutlined />
            </IconButton>
          ) : (
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
              <DarkModeIcon />
            </IconButton>
          )}

          <IconButton color="inherit">
            <SettingsIcon />
          </IconButton>
          {/* تم دمج أيقونة المستخدم (PersonIcon) مع زر تسجيل الخروج */}
        </Stack>
      </Toolbar>
    </AppBar>
  );
}

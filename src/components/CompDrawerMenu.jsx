import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  Drawer,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default (props) => {
  const drawerWidth = props.drawerWidth;
  return (
   <>
     <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      ></Drawer>
   </>
  );
};

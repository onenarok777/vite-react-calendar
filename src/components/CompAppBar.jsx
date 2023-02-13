import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
export default (props) => {
  const drawerWidth = props.drawerWidth;

  const onClickOpenMenu = (props) => {
    props.setOpen()
  };

  return (
    <AppBar
      position="static"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color="inherit" onClick={ onClickOpenMenu(props) }>
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Administrator / ผู้ดูแลระบบ
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

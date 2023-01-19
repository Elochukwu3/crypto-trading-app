import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import React from "react";
import MoreIcon from "@mui/icons-material/MoreVert";

const NaBar = ({ position }) => {
  return (
    <AppBar
      elevation={0}
      position={position}
      sx={{ bottom: "auto", top: 0, bgcolor: "#3c115f", width: "100%" }}
    >
      <Toolbar
        component={"div"}
        variant={"dense"}
        sx={{ justifyContent: "space-between" }}
      >
        <Typography variant="h4" color="inherit" component="div">
          TRX
        </Typography>
        <IconButton color="inherit" aria-label="menu">
          <MoreIcon fontSize="large"/>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NaBar;

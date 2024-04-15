import { AppBar, Box, Container, Toolbar } from "@mui/material";
import React, { useState } from "react";
import DesktopMenuComponent from "./components/DesktopMenuComponent";
import LogoComponent from "./components/LogoComponent";
import MobileMenuComponent from "./components/MobileMenuComponent";
import styles from "./styles/Header.module.css";

function Header() {
  const [anchorElNav, setAnchorElNav] = useState(null);

  return (
    <AppBar component="header" elevation={0} className={styles.appBar}>
      <Container fixed>
        <Toolbar disableGutters variant="dense">
          <Box className={styles.logoContainer}>
            <LogoComponent />
          </Box>
          <MobileMenuComponent
            anchorElNav={anchorElNav}
            setAnchorElNav={setAnchorElNav}
          />
          <DesktopMenuComponent />
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;

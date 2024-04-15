import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import styles from "../styles/Header.module.css";

function MobileMenuComponent({ anchorElNav, setAnchorElNav }) {
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box className={styles.mobileMenu}>
      <IconButton
        disableRipple
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        className={styles.menuButton}
      >
        <MenuIcon className={styles.menuIcon} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        className={styles.mobileMenu}
      >
        <MenuItem onClick={handleCloseNavMenu} className={styles.menuItem}>
          <Typography textAlign="center">favourites</Typography>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default MobileMenuComponent;

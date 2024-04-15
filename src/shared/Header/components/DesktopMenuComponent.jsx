import { Badge, Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import styles from "../styles/Header.module.css";

function DesktopMenuComponent() {
  const likedItems = useSelector((state) => state.likes.liked);
  const likesCount = likedItems.length > 5 ? "5+" : likedItems.length;

  return (
    <Box className={styles.desktopMenu}>
      <Button disableRipple variant="text" className={styles.desktopButton}>
        <Badge
          badgeContent={likesCount}
          sx={{ backgroundColor: "transparent" }}
        >
          <Typography variant="b1">favourites</Typography>
        </Badge>
      </Button>
    </Box>
  );
}

export default DesktopMenuComponent;

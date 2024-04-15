import { Box, Divider } from "@mui/material";
import styles from "../styles/Footer.module.css";
import FooterButton from "./FooterButton";

function FooterItem({ label, showDivider }) {
  return (
    <Box className={styles.box}>
      <FooterButton label={label} />
      {showDivider && (
        <Divider
          orientation="vertical"
          variant="middle"
          flexItem
          className={styles.divider}
        />
      )}
    </Box>
  );
}

export default FooterItem;

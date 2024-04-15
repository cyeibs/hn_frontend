import { Button, Typography } from "@mui/material";
import styles from "../styles/Footer.module.css";

function FooterButton({ label }) {
  return (
    <Button disableRipple className={styles.button}>
      <Typography variant="b3">{label}</Typography>
    </Button>
  );
}

export default FooterButton;

import { Box, Divider, ListItemText, Stack, Typography } from "@mui/material";
import styles from "./CommentStyles.module.css";

function CommentHeader({ by, time }) {
  return (
    <Stack className={styles.stackDirectionRow}>
      <ListItemText className={styles.listItem}>
        <Box className={styles.flexBox}>
          <Typography variant="t3" className={styles.typography}>
            by {by}
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="t3" className={styles.typography}>
            {time}
          </Typography>
        </Box>
      </ListItemText>
    </Stack>
  );
}

export default CommentHeader;

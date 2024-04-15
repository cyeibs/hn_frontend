import { Box, Button, Typography } from "@mui/material";
import styles from "./CommentStyles.module.css";

function CommentBottom({ expanded, id, index, handleClick, repliesCount }) {
  return (
    <Box className={`${styles.paddingX} ${styles.commentBorder}`}>
      <Button
        disableRipple
        variant="text"
        className={styles.showMoreButton}
        onClick={() => handleClick(id, index)}
      >
        <Typography variant="t2">
          {expanded ? "hide" : "show"} {!expanded && repliesCount} replies
        </Typography>
      </Button>
    </Box>
  );
}

export default CommentBottom;

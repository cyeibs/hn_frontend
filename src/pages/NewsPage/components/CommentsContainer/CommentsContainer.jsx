import { Box, Typography } from "@mui/material";
import CommentSection from "./CommentSection";
import styles from "./CommentStyles.module.css";

function CommentsContainer({ comments }) {
  return (
    <Box className={styles.main}>
      <Box className={styles.paddingBox}>
        <Typography variant="h3">Комментарии</Typography>
      </Box>

      <CommentSection comments={comments} />
    </Box>
  );
}

export default CommentsContainer;

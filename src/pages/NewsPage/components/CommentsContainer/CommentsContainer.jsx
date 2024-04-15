import { Box, Button, Typography } from "@mui/material";
import CommentSection from "./CommentSection";
import styles from "./CommentStyles.module.css";

function CommentsContainer({ comments, refetch }) {
  return (
    <Box className={styles.main}>
      <Box className={styles.paddingBox}>
        <Box sx={{ display: "flex", gap: 2, alignItems: "baseline" }}>
          <Typography variant="h3">Комментарии</Typography>
          <Button onClick={refetch}>
            <Typography variant="b3">обновить</Typography>
          </Button>
        </Box>
      </Box>
      <CommentSection comments={comments} />
    </Box>
  );
}

export default CommentsContainer;

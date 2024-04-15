import { Box, Typography } from "@mui/material";
import styles from "./CommentStyles.module.css";

function CommentBody({ content }) {
  return (
    <Box className={styles.paddingX}>
      <Typography variant="t2" dangerouslySetInnerHTML={{ __html: content }} />
    </Box>
  );
}

export default CommentBody;

import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import Alert from "../../../../shared/Alert/Alert";
import Loading from "../../../../shared/Loading/Loading";
import { fetchReplies } from "../../api/getNewsItemInfo";
import CommentSection from "./CommentSection";
import styles from "./CommentStyles.module.css";

function RepliesComponent({ commentId }) {
  const { isFetching, isError, data } = useQuery({
    queryKey: ["replies", commentId],
    queryFn: () => fetchReplies({ id: commentId }),
  });

  if (isFetching) return <Loading className={styles.main} />;
  if (isError)
    return <Alert className={styles.main} message={"Something went wrong"} />;

  return (
    <Box className={styles.innerPadding}>
      <CommentSection comments={data.children} />
    </Box>
  );
}

export default RepliesComponent;

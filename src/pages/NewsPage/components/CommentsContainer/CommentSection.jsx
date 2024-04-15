import { Card, CardContent, Stack } from "@mui/material";
import { useState } from "react";
import { formatDate } from "../../../../shared/utils/formatDate";
import CommentBody from "./CommentBody";
import CommentBottom from "./CommentBottom";
import CommentHeader from "./CommentHeader";
import styles from "./CommentStyles.module.css";
import RepliesComponent from "./RepliesComponent";

function CommentSection({ comments }) {
  const [expanded, setExpanded] = useState({});

  const handleExpandClick = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {comments.map((comment, index) => (
        <div key={comment.id}>
          <Card className={styles.card}>
            <CardContent className={styles.cardContent}>
              <Stack className={styles.stackDirectionColumn}>
                <CommentHeader
                  by={comment.by}
                  time={formatDate(comment.time)}
                />
                <CommentBody content={comment.text} />
                {comment.replies_count > 0 && (
                  <CommentBottom
                    expanded={expanded[comment.id]}
                    index={index}
                    handleClick={handleExpandClick}
                    id={comment.id}
                    repliesCount={comment.replies_count}
                  />
                )}
              </Stack>
            </CardContent>
          </Card>

          {expanded[comment.id] && <RepliesComponent commentId={comment.id} />}
        </div>
      ))}
    </>
  );
}

export default CommentSection;

import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { updateScore } from "../../api/RTK/likesSlice";
import Alert from "../../shared/Alert/Alert";
import Loading from "../../shared/Loading/Loading";
import { fetchNewsItem } from "./api/getNewsItemInfo";
import useCustomQuery from "./api/useCustomQuery";
import CommentsContainer from "./components/CommentsContainer/CommentsContainer";
import NewsDetail from "./components/NewsDetail";
import styles from "./styles/NewsPage.module.css";

function NewsPage() {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const { data, isPending, isError } = useCustomQuery({
    queryFunction: fetchNewsItem,
    id,
  });

  const likedItems = useSelector((state) => state.likes.liked);
  const isLiked = likedItems.includes(Number(id));
  const dispatch = useDispatch();

  const handleLikeClick = (id, index) => {
    const type = isLiked ? "decrement" : "increment";
    dispatch(updateScore({ postId: id, type: type }));
    data.score = isLiked ? (data.score -= 1) : (data.score += 1);
  };

  return (
    <Box component="main" className={styles.main}>
      <Container fixed>
        {isPending && <Loading className={styles.main} />}
        {isError ||
          (!id && (
            <Alert className={styles.main} message={"Something went wrong"} />
          ))}
        {data && (
          <>
            <Card className={styles.card}>
              <CardContent className={styles.cardContent}>
                <NewsDetail
                  handleLikeClick={handleLikeClick}
                  data={data}
                  liked={isLiked}
                />
                <Box className={styles.textBox}>
                  <Typography
                    variant="t2"
                    dangerouslySetInnerHTML={{ __html: data.text }}
                  />
                </Box>
              </CardContent>
            </Card>
            <CommentsContainer comments={data.children} />
          </>
        )}
      </Container>
    </Box>
  );
}

export default NewsPage;

import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useMemo } from "react";
import Alert from "../../shared/Alert/Alert";
import useInfiniteScroll from "../../shared/CustomInfiniteScroll/useInfiniteScroll";
import Loading from "../../shared/Loading/Loading";
import { getNewsList } from "./api/getNewsList";
import NewsItem from "./components/NewsItem";
import useLikeHandler from "./components/useLikeHandler";
import styles from "./styles/NewsList.module.css";

function NewsList() {
  const {
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isLoading,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["replies"],
    queryFn: getNewsList,
    getNextPageParam: (lastPage) => lastPage.next,
    getPreviousPageParam: (firstPage) => firstPage.previous,
    refetchInterval: 1 * 60 * 1000,
    refetchOnWindowFocus: false,
  });

  const newsArray = useMemo(
    () => data?.pages.reduce((acc, page) => [...acc, ...page.results], []),
    [data]
  );

  const lastElementRef = useInfiniteScroll({
    isLoading,
    hasNextPage,
    isFetching,
    fetchNextPage,
  });
  const { handleLikeClick, likedItems } = useLikeHandler(newsArray);

  return (
    <Box component="main" className={styles.main}>
      <Container fixed>
        {isLoading && <Loading className={styles.main} />}
        {error && (
          <Alert className={styles.main} message={"Something went wrong"} />
        )}
        {newsArray && (
          <Card className={styles.card}>
            <Box className={styles.cardHeader}>
              <Button
                onClick={refetch}
                sx={{
                  p: 0,
                }}
              >
                <Typography variant="b2" className={styles.typographyHeader}>
                  обновить
                </Typography>
              </Button>
            </Box>
            <CardContent className={styles.cardContent}>
              {newsArray &&
                newsArray.map((item, index) => (
                  <NewsItem
                    ref={lastElementRef}
                    key={index}
                    item={item}
                    index={index}
                    liked={likedItems.includes(item.id)}
                    handleLikeClick={handleLikeClick}
                  />
                ))}
            </CardContent>
            {hasNextPage && (
              <Box className={styles.footerBox}>
                <Button>More</Button>
              </Box>
            )}
          </Card>
        )}
      </Container>
    </Box>
  );
}

export default NewsList;

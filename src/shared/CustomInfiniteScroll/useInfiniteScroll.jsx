import { useRef, useCallback } from "react";

const useInfiniteScroll = ({
  isLoading,
  hasNextPage,
  isFetching,
  fetchNextPage,
}) => {
  const observer = useRef();

  const lastElementRef = useCallback(
    (node) => {
      if (isLoading) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNextPage && !isFetching) {
          fetchNextPage();
        }
      });

      if (node) observer.current.observe(node);
    },
    [isLoading, hasNextPage, isFetching, fetchNextPage]
  );

  return lastElementRef;
};

export default useInfiniteScroll;

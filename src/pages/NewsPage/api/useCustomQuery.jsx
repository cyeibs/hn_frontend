import { useQuery } from "@tanstack/react-query";

function useCusomQuery({ queryFunction, id }) {
  const { isPending, isError, data, refetch } = useQuery({
    queryKey: ["newsItem", id],
    queryFn: () => queryFunction({ id }),
    refetchOnWindowFocus: false,
  });

  return { isPending, isError, data, refetch };
}

export default useCusomQuery;

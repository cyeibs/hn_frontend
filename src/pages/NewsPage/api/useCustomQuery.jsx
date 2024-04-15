import { useQuery } from "@tanstack/react-query";

function useCusomQuery({ queryFunction, id }) {
  const { isPending, isError, data } = useQuery({
    queryKey: ["newsItem", id],
    queryFn: () => queryFunction({ id }),
  });

  return { isPending, isError, data };
}

export default useCusomQuery;

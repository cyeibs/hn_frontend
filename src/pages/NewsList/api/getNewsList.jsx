const ENDPOINT = "http://127.0.0.1:8000/api/list/?page=1";
export const getNewsList = async ({ pageParam = ENDPOINT }) => {
  const response = await fetch(`${pageParam}`);
  const todos = await response.json();
  return todos;
};

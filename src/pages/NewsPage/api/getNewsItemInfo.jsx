export async function fetchNewsItem({ id }) {
  const response = await fetch(`http://127.0.0.1:8000/api/posts/${id}`);
  const json = await response.json();
  if (response.status !== 200) {
    throw json;
  }
  return json;
}

export async function fetchReplies({ id }) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/posts/${id}/replies/`
  );
  const json = await response.json();
  if (response.status !== 200) {
    throw new Error("Failed to fetch replies");
  }
  return json;
}

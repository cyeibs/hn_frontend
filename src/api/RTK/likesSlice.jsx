import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const updateScore = createAsyncThunk(
  "likes/incrementScoreIfNeeded",
  async ({ postId, type }, { dispatch }) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:8000/api/posts/${postId}/update-score/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type: type }),
        }
      );
      dispatch(setLike(postId));
    } catch (error) {
      console.error("Error updating score:", error);
    }
  }
);

const loadLikes = () => {
  const likes = localStorage.getItem("liked");
  if (likes) {
    return JSON.parse(likes);
  }
  localStorage.setItem("liked", JSON.stringify([]));
  return [];
};

const initialState = {
  liked: loadLikes(),
};

export const likesSlice = createSlice({
  name: "likes",
  initialState,
  reducers: {
    setLike: (state, action) => {
      const id = action.payload;
      if (!state.liked.includes(id)) {
        state.liked.push(id);
      } else {
        state.liked = state.liked.filter((item) => item !== id);
      }
      localStorage.setItem("liked", JSON.stringify(state.liked));
    },
  },
});

export const { setLike } = likesSlice.actions;

export default likesSlice.reducer;

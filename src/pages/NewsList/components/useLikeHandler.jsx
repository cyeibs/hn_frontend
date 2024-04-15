import { useDispatch, useSelector } from "react-redux";
import { updateScore } from "../../../api/RTK/likesSlice";

const useLikeHandler = (newsArray) => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.likes.liked);

  const handleLikeClick = (id, index) => {
    const isLiked = likedItems.includes(id);
    const type = isLiked ? "decrement" : "increment";
    dispatch(updateScore({ postId: id, type: type }));
    newsArray[index].score = isLiked
      ? (newsArray[index].score -= 1)
      : (newsArray[index].score += 1);
  };

  return { handleLikeClick, likedItems };
};

export default useLikeHandler;

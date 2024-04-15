import React from "react";
import ArrowStale from "./icons/ArrowStale.svg?react";
import ArrowUp from "./icons/ArrowUp.svg?react";

function IconRating({ liked = false }) {
  if (liked) {
    return <ArrowUp />;
  } else {
    return <ArrowStale />;
  }
}

export default React.memo(IconRating);

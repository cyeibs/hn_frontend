import {
  Box,
  IconButton,
  ListItemText,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import styles from "../styles/NewsList.module.css";
import React from "react";
import { formatDate } from "../../../shared/utils/formatDate";
import { Link } from "react-router-dom";
import IconRating from "../../../shared/IconRating/IconRating";

function NewsItem({ item, handleLikeClick, liked, index }, ref) {
  return (
    <Stack ref={ref} className={styles.stack}>
      <Box className={styles.iconBox}>
        <IconButton
          onClick={() => handleLikeClick(item.id, index)}
          sx={{ p: 0 }}
        >
          <SvgIcon className={styles.icon} inheritViewBox>
            <IconRating liked={liked} />
          </SvgIcon>
        </IconButton>
        <Typography variant="t2">{item.score}</Typography>
      </Box>
      <ListItemText>
        <Link
          to={`item?id=${item.id}`}
          className={styles.typographyHeader}
          style={{ textDecoration: "none" }}
        >
          <Typography variant="h3" className={styles.typographyHeader}>
            {item.title}
          </Typography>
        </Link>
        <Typography variant="t3" className={styles.typographySubheader}>
          by {item.by}
        </Typography>
      </ListItemText>
      <Box>
        <Typography variant="t3" className={styles.typographyTime}>
          {formatDate(item.time)}
        </Typography>
      </Box>
    </Stack>
  );
}

export default React.forwardRef(NewsItem);

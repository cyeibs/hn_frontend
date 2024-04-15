import {
  Box,
  Divider,
  IconButton,
  ListItemText,
  Stack,
  SvgIcon,
  Typography,
} from "@mui/material";
import { formatDate } from "../../../shared/utils/formatDate";
import styles from "../styles/NewsPage.module.css";
import IconRating from "../../../shared/IconRating/IconRating";

function NewsDetail({ handleLikeClick, data, liked }) {
  return (
    <Stack className={styles.rowStack}>
      <Box className={styles.iconBox}>
        <IconButton onClick={() => handleLikeClick(data.id)} sx={{ p: 0 }}>
          <SvgIcon className={styles.svgIcon} inheritViewBox>
            <IconRating liked={liked} />
          </SvgIcon>
        </IconButton>
        <Typography variant="t2" className={styles.typographyRating}>
          {data.score}
        </Typography>
      </Box>
      <ListItemText>
        <Typography variant="h3" className={styles.typographyDetails}>
          {data.title}
        </Typography>
        <Box className={styles.linkDetails}>
          <Typography variant="t3" className={styles.linkStyle}>
            by {data.by}
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem />
          <Typography variant="t3" className={styles.linkStyle}>
            {data.descendants} comments
          </Typography>
          <Divider orientation="vertical" variant="middle" flexItem />
          <a
            href={data.url}
            className={styles.linkStyle}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="t3" className={styles.typographyDetails}>
              Source
            </Typography>
          </a>
        </Box>
      </ListItemText>
      <Box>
        <Typography variant="t3" className={styles.typographyTime}>
          {formatDate(data.time)}
        </Typography>
      </Box>
    </Stack>
  );
}

export default NewsDetail;

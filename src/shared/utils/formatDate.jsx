import { format, formatDistanceToNow, parseISO, subDays } from "date-fns";

export const formatDate = (dateString) => {
  const date = parseISO(dateString);
  const threeDaysAgo = subDays(new Date(), 3);

  if (date < threeDaysAgo) {
    return format(date, "dd-MM-yyyy");
  } else {
    return formatDistanceToNow(date, { includeSeconds: true });
  }
};

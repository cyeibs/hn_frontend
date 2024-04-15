import { createTheme } from "@mui/material/styles";

const fontTheme = createTheme({
  typography: {
    /* Desktop/Heading/H1 */
    h1: {
      fontFamily: "Montserrat",
      fontSize: "3.375rem",
      fontStyle: "normal",
      fontWeight: 700,
      textTransform: "none",
      lineHeight: 1.3,
      "@media (max-width:900px)": {
        fontSize: "2.375rem",
        fontWeight: 600,
        lineHeight: "130%",
      },
    },
    /* Desktop/Heading/H2 */
    h2: {
      fontFamily: "Montserrat",
      fontSize: "2rem",
      fontStyle: "normal",
      fontWeight: 700,
      textTransform: "none",
      lineHeight: 1.3,
      "@media (max-width:900px)": {
        fontSize: "1.5rem",
        fontWeight: 600,
        lineHeight: "130%",
      },
    },
    /* Desktop/Heading/H3 */
    h3: {
      fontFamily: "Montserrat",
      fontSize: "1.5rem",
      fontStyle: "normal",
      fontWeight: 700,
      textTransform: "none",
      lineHeight: 1.3,
      "@media (max-width:900px)": {
        fontSize: "1.25rem",
        lineHeight: "130%",
      },
    },
    /* Desktop/Text/T0 */
    t0: {
      fontFamily: "Montserrat",
      fontSize: "1.25rem",
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "none",
      lineHeight: 1.6,
      "@media (max-width:900px)": {
        fontSize: "1rem",
        lineHeight: "normal",
      },
    },
    /* Desktop/Text/T1 */
    t1: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 400,
      textTransform: "none",
      lineHeight: "normal",
      "@media (max-width:900px)": {
        fontSize: "0.875rem",
      },
    },
    /* Desktop/Text/T2 */
    t2: {
      fontFamily: "Montserrat",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 400,
      textTransform: "none",
      lineHeight: "normal",
      "@media (max-width:900px)": {
        fontSize: "0.75rem",
      },
    },
    /* Desktop/Text/T3 */
    t3: {
      fontFamily: "Montserrat",
      fontSize: "0.75rem",
      fontStyle: "normal",
      fontWeight: 400,
      textTransform: "none",
      lineHeight: "normal",
    },
    /* Desktop/Button/B1 */
    b1: {
      fontFamily: "Montserrat",
      fontSize: "1rem",
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "none",
      lineHeight: "normal",
    },
    /* Desktop/Button/B2 */
    b2: {
      fontFamily: "Montserrat",
      fontSize: "0.875rem",
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "none",
      lineHeight: "normal",
    },
    /* Desktop/Button/B3 */
    b3: {
      fontFamily: "Montserrat",
      fontSize: "0.625rem",
      fontStyle: "normal",
      fontWeight: 500,
      textTransform: "none",
      lineHeight: "normal",
    },
  },
});

export const theme = fontTheme;

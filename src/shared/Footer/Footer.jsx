import { Container } from "@mui/material";
import styles from "./styles/Footer.module.css";
import FooterItem from "./components/FooterItem";

function Footer() {
  const buttons = [
    "Guidelines",
    "FAQ",
    "Lists",
    "API",
    "Security",
    "Legal",
    "Apply to YC",
    "Contact",
  ];

  return (
    <Container fixed component="footer" className={styles.container}>
      {buttons.map((button, index, array) => (
        <FooterItem
          key={index}
          label={button}
          showDivider={index < array.length - 1}
        />
      ))}
    </Container>
  );
}

export default Footer;

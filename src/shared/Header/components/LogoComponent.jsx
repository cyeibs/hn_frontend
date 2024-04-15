import { SvgIcon } from "@mui/material";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import Logo from "./images/logo.svg?react";

function LogoComponent() {
  return (
    <Link to="/">
      <SvgIcon inheritViewBox className={styles.logoIcon}>
        <Logo />
      </SvgIcon>
    </Link>
  );
}

export default LogoComponent;

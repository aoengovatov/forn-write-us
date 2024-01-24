import styles from "./LogoComponent.module.css";
import logo from "../../assets/logo.png";

export const LogoComponent = () => {
    return <img className={styles.logo} src={logo}></img>;
};

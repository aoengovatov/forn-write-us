import styles from "./SendAnswerComponent.module.css";

export const SendAnswerComponent = ({ children }) => {
    return <div className={styles.titleAnswer}>{children}</div>;
};

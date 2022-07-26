import useScrollProgress from "./scrollProgress.hook";
import styles from "./ScrollProgressIndicator.module.css";

const ScrollProgressIndicator = () => {
     const { percent } = useScrollProgress();

     return <div className={styles.ScrollProgressIndicator} style={{ width: `${percent}%` }}></div>;
};

export default ScrollProgressIndicator;

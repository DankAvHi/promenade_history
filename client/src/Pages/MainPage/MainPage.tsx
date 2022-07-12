import styles from "./MainPage.module.css";
import Header from "./Sections/Header/Header";

export default function MainPage() {
     return (
          <div className={styles.MainPage}>
               <Header />
          </div>
     );
}

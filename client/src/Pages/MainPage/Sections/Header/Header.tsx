import Button from "../../../../Components/UI/Buttons/Button/Button";
import logoImage from "../../Assets/Images/PromenadeHistoryLogo.png";
import styles from "./Header.module.css";
import HeaderText from "./HeaderText";

export default function Header() {
     return (
          <div className={styles.Header}>
               <div className={styles.container}>
                    <img className={styles.logoImage} src={logoImage} alt="" />

                    <div className={styles.content}>
                         <p className={styles.accientText}>{HeaderText.accientText}</p>
                         <p className={styles.firstSubText}>{HeaderText.firstSubText}</p>
                         <p className={styles.heroText}>{HeaderText.heroText}</p>
                         <p className={styles.secondSubText}>{HeaderText.secondSubText}</p>

                         <Button text={HeaderText.buttonText} className={styles.button} />
                         <p className={styles.buttonSubText}>{HeaderText.buttonSubText}</p>
                    </div>
               </div>
          </div>
     );
}

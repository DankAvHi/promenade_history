import { useContext } from "react";
import ProfilePageContext from "../../ProfilePage.context";
import styles from "./WelcomeSection.module.css";

const WelcomeSection = () => {
     const { userData, ProfilePageText, logoutUser } = useContext(ProfilePageContext);

     return (
          <div className={styles.WelcomeSection}>
               <img className={styles.userImage} src={userData?.image} alt="" />

               <div className={styles.block}>
                    <p className={styles.heading}>{ProfilePageText.welcome}</p>
                    <p className={styles.userName}>{userData?.name}</p>
                    <button className={styles.logout} onClick={logoutUser}>
                         {ProfilePageText.logout}
                    </button>
               </div>
          </div>
     );
};

export default WelcomeSection;

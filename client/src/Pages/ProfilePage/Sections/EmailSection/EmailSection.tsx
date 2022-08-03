import { useContext } from "react";
import Button from "../../../../Components/UI/Buttons/Button/Button";
import { SET_EMAIL_PAGE_ROUTE } from "../../../../shared/routes/pages/pages.shared";
import ProfilePageContext from "../../ProfilePage.context";
import styles from "./EmailSection.module.css";

const EmailSection = () => {
     const { userData, ProfilePageText } = useContext(ProfilePageContext);
     return (
          <div className={styles.EmailSection}>
               {userData?.email ? (
                    <>
                         <div className={styles.header}>{ProfilePageText.email.existed}</div>
                         <div className={styles.email}>{userData?.email}</div>
                         <Button
                              className={styles.change}
                              type="link"
                              href={SET_EMAIL_PAGE_ROUTE}
                              text={ProfilePageText.email.change}
                         />
                    </>
               ) : (
                    <>
                         <div className={styles.header}>{ProfilePageText.email.notExisted}</div>
                         <Button
                              className={styles.change}
                              type="link"
                              href={SET_EMAIL_PAGE_ROUTE}
                              text={ProfilePageText.email.add}
                         />
                    </>
               )}
          </div>
     );
};

export default EmailSection;

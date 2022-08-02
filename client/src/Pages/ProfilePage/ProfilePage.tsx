import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../Api/index.api";
import Loader from "../../Components/Common/loader/Loader";
import Button from "../../Components/UI/Buttons/Button/Button";
import Heading from "../../Components/UI/Headings/Heading/Heading";
import AuthContext from "../../contexts/AuthContext";
import { UserData } from "../../shared/interfaces/api/userData.shared";
import { SET_EMAIL_PAGE_ROUTE } from "../../shared/routes/pages/pages.shared";
import styles from "./ProfilePage.module.css";
import ProfilePageText from "./ProfilePage.text";

const ProfilePage = () => {
     const { getUserData, loading } = api().useGetUserDataApi();
     const { logout } = api().useLogoutApi();
     const { isAuthenticated } = useContext(AuthContext);
     const navigate = useNavigate();

     const [userData, setUserData] = useState<UserData>();

     const loadUserData = useCallback(async () => {
          const data = await getUserData();
          setUserData(data.user);
     }, [getUserData]);

     const logoutUser = async () => {
          const data = await logout();

          if (data.succes) {
               localStorage.setItem("isUserHasAuthenticated", isAuthenticated ? "true" : "false");
               window.location.reload();
          }
     };

     useEffect(() => {
          loadUserData().catch((err) => {
               navigate("/");
               window.location.reload();
          });
     }, [loadUserData, navigate]);

     if (loading) {
          return <Loader />;
     }

     if (!userData) {
          return (
               <div className={styles.ProfilePage}>
                    <div className={styles.container}>
                         <Heading className={styles.loading_error}>{ProfilePageText.loading_error}</Heading>
                         <Button
                              className={styles.loading_error}
                              type="link"
                              external={true}
                              href={`mailto:${ProfilePageText.support_email}`}
                              text={ProfilePageText.support_email}
                         />
                         <button className={styles.logout} onClick={logoutUser}>
                              {ProfilePageText.logout}
                         </button>
                    </div>
               </div>
          );
     }

     return (
          <div className={styles.ProfilePage}>
               <div className={styles.container}>
                    <Heading className={styles.heading} headingLevel="h2">
                         {ProfilePageText.heading}
                    </Heading>

                    <div className={styles.welcome}>
                         <img className={styles.userImage} src={userData.image} alt="" />

                         <div className={styles.welcomeBlock}>
                              <p className={styles.welcomeHeading}>{ProfilePageText.welcome}</p>
                              <p className={styles.userName}>{userData.name}</p>
                              <button className={styles.logout} onClick={logoutUser}>
                                   {ProfilePageText.logout}
                              </button>
                         </div>
                    </div>
                    <div className={styles.emailBlock}>
                         {userData.email ? (
                              <>
                                   <div className={styles.emailHeader}>{ProfilePageText.email.existed}</div>
                                   <div className={styles.email}>{userData.email}</div>
                                   <Button
                                        className={styles.emailChange}
                                        type="link"
                                        href={SET_EMAIL_PAGE_ROUTE}
                                        text={ProfilePageText.email.change}
                                   />
                              </>
                         ) : (
                              <>
                                   <div className={styles.emailHeader}>{ProfilePageText.email.not_existed}</div>
                                   <Button
                                        className={styles.emailChange}
                                        type="link"
                                        href={SET_EMAIL_PAGE_ROUTE}
                                        text={ProfilePageText.email.add}
                                   />
                              </>
                         )}
                    </div>
               </div>
          </div>
     );
};

export default ProfilePage;

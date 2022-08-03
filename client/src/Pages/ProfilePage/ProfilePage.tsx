import { useCallback, useContext, useEffect, useState } from "react";
import { api } from "../../Api/index.api";
import Loader from "../../Components/Common/loader/Loader";
import Button from "../../Components/UI/Buttons/Button/Button";
import Heading from "../../Components/UI/Headings/Heading/Heading";
import AuthContext from "../../contexts/AuthContext";
import { TicketsData } from "../../shared/interfaces/api/getUserTickets.shared";
import { UserData } from "../../shared/interfaces/api/userData.shared";
import ProfilePageContext from "./ProfilePage.context";
import styles from "./ProfilePage.module.css";
import ProfilePageText from "./ProfilePage.text";
import EmailSection from "./Sections/EmailSection/EmailSection";
import TicketsSection from "./Sections/TicketsSection/TicketsSection";
import WelcomeSection from "./Sections/WelcomeSection/WelcomeSection";

const ProfilePage = () => {
     const { getUserData, loading } = api().useGetUserDataApi();
     const { getUserTickets, loading: loadingTickets } = api().useGetUserTicketsApi();
     const { logout } = api().useLogoutApi();
     const { isAuthenticated } = useContext(AuthContext);

     const [userData, setUserData] = useState<UserData>();
     const [tickets, setTickets] = useState<TicketsData>();

     const loadProfileData = useCallback(async () => {
          try {
               const dataUser = await getUserData();
               setUserData(dataUser.user);
          } catch (e) {
               console.error(e);
          }
          try {
               const dataTickets = await getUserTickets();
               setTickets(dataTickets.tickets);
          } catch (e) {
               console.error(e);
          }
     }, [getUserData, getUserTickets]);

     const logoutUser = async () => {
          const data = await logout();

          if (data.succes) {
               localStorage.setItem("isUserHasAuthenticated", isAuthenticated ? "true" : "false");
               window.location.reload();
          }
     };

     useEffect(() => {
          loadProfileData();
     }, [loadProfileData]);

     if (loading || loadingTickets) {
          return <Loader />;
     }

     if (!userData) {
          return (
               <div className={styles.ProfilePage}>
                    <div className={styles.container}>
                         <Heading className={styles.loading_error}>{ProfilePageText.loadingError}</Heading>
                         <Button
                              className={styles.loading_error}
                              type="link"
                              external={true}
                              href={`mailto:${ProfilePageText.supportEmail}`}
                              text={ProfilePageText.supportEmail}
                         />
                         <button className={styles.logout} onClick={logoutUser}>
                              {ProfilePageText.logout}
                         </button>
                    </div>
               </div>
          );
     }

     return (
          <ProfilePageContext.Provider value={{ userData, ProfilePageText, logoutUser, tickets }}>
               <div className={styles.ProfilePage}>
                    <div className={styles.container}>
                         <Heading className={styles.heading} headingLevel="h2">
                              {ProfilePageText.heading}
                         </Heading>

                         <WelcomeSection />
                         <EmailSection />
                         {tickets ? (
                              <TicketsSection />
                         ) : (
                              <>
                                   <Heading className={styles.loading_error}>
                                        {ProfilePageText.loadingTickets_error}
                                   </Heading>
                                   <Button
                                        className={styles.loading_error}
                                        type="link"
                                        external={true}
                                        href={`mailto:${ProfilePageText.supportEmail}`}
                                        text={ProfilePageText.supportEmail}
                                   />
                              </>
                         )}
                    </div>
               </div>
          </ProfilePageContext.Provider>
     );
};

export default ProfilePage;

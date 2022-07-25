import { useCallback, useEffect, useState } from "react";
import { api } from "../../Api/index.api";
import Loader from "../../Components/Common/loader/Loader";
import Heading from "../../Components/UI/Headings/Heading/Heading";
import { UserData } from "../../shared/interfaces/api/userData.shared";
import styles from "./ProfilePage.module.css";
import ProfilePageText from "./ProfilePage.text";

const ProfilePage = () => {
     const { getUserData, loading } = api().useGetUserDataApi();

     const [userData, setUserData] = useState<UserData>();

     const loadUserData = useCallback(async () => {
          const data = await getUserData();
          setUserData(data.user);
     }, [getUserData]);

     useEffect(() => {
          loadUserData();
     }, [loadUserData]);

     if (loading) {
          return <Loader />;
     }

     return (
          <div className={styles.ProfilePage}>
               <div className={styles.container}>
                    <Heading className={styles.heading} headingLevel="h2" fontSize={4} fontWeight={700}>
                         {ProfilePageText.heading}
                    </Heading>

                    <div className={styles.welcome}>
                         <img className={styles.userImage} src={userData?.image} alt="" />

                         <div className={styles.welcomeText}>
                              <p className={styles.welcomeHeading}>{ProfilePageText.welcome}</p>
                              <p className={styles.userName}>{userData?.name}</p>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProfilePage;

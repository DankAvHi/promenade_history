import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../App/contexts/AuthContext";
import useWindowSize from "../../../hooks/windowSize.hook";
import { AUTH_LOGOUT_API, AUTH_VKONTAKTE_API } from "../../../shared/routes/api/api.shared";
import SiteSections from "../../../types/Navigation/siteSections.type";
import menuImage from "./Assets/Images/menuIcon.png";
import vkImage from "./Assets/Images/vkIcon.png";
import styles from "./Navigation.module.css";
import { AUTH_WITH, PROFILE_LINK_TEXT, UNAUTH } from "./Navigation.text";

type NavigationProps = {
     siteSections: SiteSections;
};

export default function Navigation({ siteSections }: NavigationProps) {
     const { size } = useWindowSize();
     const { isAuthenticated } = useContext(AuthContext);

     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toogleMenuButtonOnclickHandler = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     const setIsUserHasAuthenticated = (status: boolean) => {
          return () => {
               localStorage.setItem("isUserHasAuthenticated", status ? "true" : "false");
          };
     };

     useEffect(() => {
          if (size[0] > 768) {
               setIsMenuOpen(false);
          }
     }, [size]);

     const containerStatusClasses = isMenuOpen ? styles.container_open : null;

     return (
          <>
               <div className={styles.Navigation}>
                    <ul className={`${styles.container} ${containerStatusClasses}`}>
                         {siteSections.map((section) => {
                              return (
                                   <li className={styles.item} key={section.id}>
                                        <Link
                                             to={`/#${section.id}`}
                                             onClick={toogleMenuButtonOnclickHandler}
                                             className={styles.link}
                                        >
                                             {section.label}
                                        </Link>
                                   </li>
                              );
                         })}
                         {isAuthenticated ? (
                              <li className={styles.item}>
                                   <Link className={styles.link} to={`/profile`}>
                                        {PROFILE_LINK_TEXT}
                                   </Link>
                              </li>
                         ) : null}
                         <a
                              href={isAuthenticated ? AUTH_LOGOUT_API : AUTH_VKONTAKTE_API}
                              onClick={setIsUserHasAuthenticated(!isAuthenticated)}
                              className={styles.vkLink}
                         >
                              <span className={styles.vkText}>{isAuthenticated ? UNAUTH : AUTH_WITH}</span>
                              <img className={styles.vkImage} src={vkImage} alt="" />
                         </a>
                    </ul>

                    <button onClick={toogleMenuButtonOnclickHandler} className={styles.button}>
                         <img className={styles.buttonImage} src={menuImage} alt="" />
                    </button>
               </div>
          </>
     );
}

import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../contexts/AuthContext";
import useWindowSize from "../../../hooks/windowSize.hook";
import SiteSections from "../../../types/Navigation/siteSections";
import menuImage from "./Assets/Images/menuIcon.png";
import styles from "./Navigation.module.css";

type NavigationProps = {
     siteSections: SiteSections;
};

export default function Navigation({ siteSections }: NavigationProps) {
     const { size } = useWindowSize();
     const { isAuthenticated } = useContext(AuthContext);

     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const containerStatusClasses = isMenuOpen ? styles.container_open : null;

     const toogleMenuButtonOnclickHandler = () => {
          setIsMenuOpen(!isMenuOpen);
     };

     const setIsUserHasAuthenticated = (status: boolean) => {
          return () => {
               localStorage.setItem("isUserHasAuthenticated", status ? "true" : "false");
          };
     };

     useEffect(() => {
          setIsMenuOpen(false);
     }, [size]);

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
                         {/* {isAuthenticated ? (
                              <li className={styles.item}>
                                   <Link className={styles.vkLink} to={`/profile`}>
                                        <span className={styles.vkText}>{PROFILE_LINK_TEXT}</span>
                                        <img className={styles.vkImage} src={vkImage} alt="" />
                                   </Link>
                              </li>
                         ) : (
                              <a
                                   href={AUTH_VKONTAKTE_API}
                                   onClick={setIsUserHasAuthenticated(!isAuthenticated)}
                                   className={styles.vkLink}
                              >
                                   <span className={styles.vkText}>{AUTH_WITH}</span>
                                   <img className={styles.vkImage} src={vkImage} alt="" />
                              </a>
                         )} */}
                    </ul>

                    <button onClick={toogleMenuButtonOnclickHandler} className={styles.button}>
                         <img className={styles.buttonImage} src={menuImage} alt="" />
                    </button>
               </div>
          </>
     );
}

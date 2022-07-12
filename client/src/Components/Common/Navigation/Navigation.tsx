import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../../App/contexts/AuthContext";
import useWindowSize from "../../../hooks/windowSize.hook";
import { AUTH_LOGOUT_API, AUTH_VKONTAKTE_API } from "../../../shared/routes/api/api.shared";
import SiteSectionsType from "../../../types/Navigation/siteSections.type";
import menuImage from "./Assets/Images/menuIcon.png";
import vkImage from "./Assets/Images/vkIcon.png";
import styles from "./Navigation.module.css";
import { AUTH_WITH, UNAUTH } from "./Navigation.text";

type NavigationPropsType = {
     siteSections: SiteSectionsType;
};

export default function Navigation({ siteSections }: NavigationPropsType) {
     const { size } = useWindowSize();
     const { isAuthenticated } = useContext(AuthContext);

     const [isMenuOpen, setIsMenuOpen] = useState(false);

     const toogleMenuButtonOnclickHandler = () => {
          setIsMenuOpen(!isMenuOpen);
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
                                        <Link to={`/#${section.id}`} className={styles.link}>
                                             {section.label}
                                        </Link>
                                   </li>
                              );
                         })}
                         <a href={isAuthenticated ? AUTH_LOGOUT_API : AUTH_VKONTAKTE_API} className={styles.vkLink}>
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

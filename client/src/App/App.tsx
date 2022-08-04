import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../Components/Common/loader/Loader";
import Navigation from "../Components/Common/Navigation/Navigation";
import TopPopup from "../Components/Common/TopPopup/TopPopup";
import { TopPopupArray } from "../Components/Common/TopPopup/TopPopup.d";
import AuthContext from "../contexts/AuthContext";
import { useAuth } from "../hooks/auth.hook";
import useScrollLock from "../hooks/scrollLock";
import SiteSections from "../types/Navigation/siteSections.type";
import styles from "./App.module.css";
import { useRoutes } from "./App.routes";
import AppContext from "./contexts/App.context";

function App() {
     const { login, logout, isAuthenticated, email } = useAuth();
     const { lockScroll, unlockScroll } = useScrollLock();
     const location = useLocation();

     const [appTopPopupMesages, setAppTopPopupMesages] = useState<TopPopupArray>([]);
     const [loading, setLoading] = useState<boolean>(true);

     useEffect(() => {
          lockScroll();
          const onPageLoad = () => {
               setLoading(false);
               unlockScroll();
          };
          if (document.readyState === "complete") {
               onPageLoad();
          } else {
               window.addEventListener("load", onPageLoad);
               return () => window.removeEventListener("load", onPageLoad);
          }
     }, [lockScroll, unlockScroll]);

     useEffect(() => {
          if (location.hash && !loading) {
               let elem = document.getElementById(location.hash.slice(1));
               if (elem) {
                    elem.scrollIntoView({ behavior: "smooth" });
               }
          } else {
               window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }
     }, [location, loading]);

     const routes = useRoutes(isAuthenticated === true);

     const siteSections: SiteSections = [
          { id: "promenadeHistory", label: "Promenade History?" },
          { id: "howItWorks", label: "Как это работает" },
          { id: "startPoint", label: "Точка старта" },
          { id: "pushkinCard", label: "Пушкинская карта" },
          { id: "tickets", label: "Билеты" },
     ];

     return (
          <AppContext.Provider value={{ appTopPopupMesages, setAppTopPopupMesages }}>
               <AuthContext.Provider value={{ isAuthenticated, login, logout, email }}>
                    {appTopPopupMesages.length
                         ? appTopPopupMesages.map((message) => (
                                <TopPopup
                                     key={Math.random()}
                                     text={message.text}
                                     type={message.type}
                                     duration={message.duration}
                                />
                           ))
                         : null}
                    <div className={styles.App}>
                         {loading ? <Loader /> : null}
                         {isAuthenticated === "unknow" ? (
                              <Loader />
                         ) : (
                              <>
                                   <Navigation siteSections={siteSections} />
                                   {routes}
                              </>
                         )}
                    </div>
               </AuthContext.Provider>
          </AppContext.Provider>
     );
}

export default App;

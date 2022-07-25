import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../Components/Common/loader/Loader";
import Navigation from "../Components/Common/Navigation/Navigation";
import TopPopup from "../Components/Common/TopPopup/TopPopup";
import { TopPopupArray } from "../Components/Common/TopPopup/TopPopup.d";
import { useAuth } from "../hooks/auth.hook";
import SiteSections from "../types/Navigation/siteSections.type";
import styles from "./App.module.css";
import { useRoutes } from "./App.routes";
import AppContext from "./contexts/App.context";
import AuthContext from "./contexts/AuthContext";

function App() {
     const { login, logout, isAuthenticated } = useAuth();
     const location = useLocation();

     useEffect(() => {
          if (location.hash) {
               let elem = document.getElementById(location.hash.slice(1));
               if (elem) {
                    elem.scrollIntoView({ behavior: "smooth" });
               }
          } else {
               window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }
     }, [location]);

     const [appTopPopupMesages, setAppTopPopupMesages] = useState<TopPopupArray>([]);

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
               <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
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

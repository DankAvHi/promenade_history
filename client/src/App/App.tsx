import Navigation from "../Components/Common/Navigation/Navigation";
import { useAuth } from "../hooks/auth.hook";
import SiteSectionsType from "../types/Navigation/siteSections.type";
import styles from "./App.module.css";
import { useRoutes } from "./App.routes";
import AuthContext from "./contexts/AuthContext";

function App() {
     const { login, logout, userID } = useAuth();
     const isAuthenticated = !!userID;

     const routes = useRoutes(isAuthenticated);

     const siteSections: SiteSectionsType = [
          { id: "howItWorks", label: "Как это работает" },
          { id: "story", label: "Сюжет" },
          { id: "startPoint", label: "Точка старта" },
          { id: "pushkinCard", label: "Пушкинская карта" },
          { id: "citys", label: "Города" },
     ];

     return (
          <AuthContext.Provider value={{ isAuthenticated, login, logout, userID }}>
               <div className={styles.App}>
                    <Navigation siteSections={siteSections} />
                    {routes}
               </div>
          </AuthContext.Provider>
     );
}

export default App;

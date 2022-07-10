import { useAuth } from "../hooks/auth.hook";
import styles from "./App.module.css";
import { useRoutes } from "./App.routes";
import AuthContext from "./contexts/AuthContext";

function App() {
     const routes = useRoutes(false);
     const { token, login, logout, userID } = useAuth();
     const isAuthenticated = !!token;

     return (
          <AuthContext.Provider value={{ isAuthenticated, login, logout, token, userID }}>
               <div className={styles.App}>{routes}</div>
          </AuthContext.Provider>
     );
}

export default App;

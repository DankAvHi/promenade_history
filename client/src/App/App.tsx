import { useHttp } from "../Api/http.hook";
import styles from "./App.module.css";
import { useRoutes } from "./App.routes";

function App() {
     const routes = useRoutes(false);
     const { request } = useHttp();

     const t = async () => {
          await request("/api/authentication/vkontakte");
     };

     return (
          <div className={styles.App}>
               {routes} <button onClick={t}>sdf</button>
          </div>
     );
}

export default App;

import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "../Pages/MainPage/MainPage";

const Test = () => {
     return <div>test</div>;
};

export const useRoutes = (isAuthenticated: boolean) => {
     return (
          <Routes>
               <Route path="/" element={<MainPage />} />
               <Route path="/test" element={<Test />} />
               <Route path="*" element={<Navigate replace to={"/"} />} />
          </Routes>
     );
};

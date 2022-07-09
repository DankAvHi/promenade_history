import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "../Pages/MainPage/MainPage";

export const useRoutes = (isAuthenticated: boolean) => {
     return (
          <Routes>
               <Route path="/" element={<MainPage />} />
               <Route path="*" element={<Navigate replace to={"/"} />} />
          </Routes>
     );
};

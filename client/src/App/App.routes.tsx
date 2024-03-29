import { Navigate, Route, Routes } from "react-router-dom";

import MainPage from "../Pages/MainPage/MainPage";

export const useRoutes = (isAuthenticated: boolean) => {
     if (isAuthenticated)
          return (
               <Routes>
                    <Route path="/" element={<MainPage />} />
                    {/* <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/set-email" element={<SetEmailPage />} /> */}

                    <Route path="*" element={<Navigate replace to={"/"} />} />
               </Routes>
          );
     return (
          <Routes>
               <Route path="/" element={<MainPage />} />

               <Route path="*" element={<Navigate replace to={"/"} />} />
          </Routes>
     );
};

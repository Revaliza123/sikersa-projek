import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Error404 from "../components/Error/Error404";
import TopBarLoader from "../components/Loader/TopBarLoader";
import SidebarLayout from "@app/modules/layouts/SidebarLayout/SidebarLayout";
import AdministrasiRouting from "./Administrasi/AdministrasiRouting";

const ProfilePage = React.lazy(() => import("@app/pages/Account/ProfilePage"));

function PagesRouting() {
  return (
    <>
      <Routes>
        <Route path="">
          <Route path="" element={<SidebarLayout />}>
            <Route
              path="administrasi/*"
              element={
                <React.Suspense fallback={<TopBarLoader />}>
                  {" "}
                  <AdministrasiRouting />{" "}
                </React.Suspense>
              }
            ></Route>
            <Route path="account">
              <Route
                path=""
                element={<Navigate to={"profile"}></Navigate>}
              ></Route>
              <Route
                path="profile"
                element={
                  <React.Suspense fallback={<TopBarLoader />}>
                    {" "}
                    <ProfilePage />{" "}
                  </React.Suspense>
                }
              />
              {/* <Route path="forgot-password" element={<ForgotPassword />} /> */}
            </Route>
          </Route>
          <Route path="*" element={<Error404 />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default PagesRouting;

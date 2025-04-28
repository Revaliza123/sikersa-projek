import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import TopBarLoader from "./components/Loader/TopBarLoader";
import DashboardApps from "./pages/Application/DashboardApps";
import Error404 from "./components/Error/Error404";
import ProtectedRoute from "@app/routes/ProtectedRoute";

const Signin = React.lazy(
  () => import("@app/pages/Account/SigninByWorkspacePage")
);

const PagesRouting = React.lazy(() => import("@app/pages/PagesRouting"));
const AppLandingPage = React.lazy(
  () => import("@app/pages/AppLanding/AppLandingPage")
);

function AppRouting() {
  return (
    <Routes>
        <Route path="" element={<Navigate to={"app"} />}></Route>
        <Route path="app" element={<AppLandingPage />}></Route>
      <Route
        path="signin"
        element={
          <React.Suspense fallback={<TopBarLoader />}>
            <Signin />
          </React.Suspense>
        }
      />
      <Route
        path="*"
        element={
          <ProtectedRoute>
            <React.Suspense fallback={<TopBarLoader />}>
              <PagesRouting />
            </React.Suspense>
          </ProtectedRoute>
        }
      ></Route>
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}

export default AppRouting;

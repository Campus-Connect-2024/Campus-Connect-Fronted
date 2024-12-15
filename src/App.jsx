import React, {lazy, Suspense} from "react";
import Auth from "./pages/auth/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/auth/Register";
import Profile from "./pages/profilePage/Profile";
import AllCommunicatiesPage from "./pages/communities/AllCommunicatiesPage";
import AllUsersPage from "./pages/users/AllUsersPage";
import { LoadingPage } from "./Components/index.js";
import ErrorPage from "./pages/Error/ErrorPage.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import AuthRoute from "./utils/AuthRoute.jsx";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandingPage from "./pages/Landing/LandingPage.jsx";
import PageNotFound from "./pages/Error/PageNotFound.jsx";

function App() {
  const Dashboard = lazy(() => import("./pages/Dashboard/Dashboard.jsx"));
  return (
    <BrowserRouter>
    <div className="p-0 m-0 box-border">
      <Routes>
        <Route
          path="/login"
          element={
            <AuthRoute>
              <Auth />
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/register"
          element={
            <AuthRoute>
              <Register />
            </AuthRoute>
          }
        ></Route>
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <LandingPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
            <Suspense fallback={<LoadingPage />}>
              <Dashboard />
            </Suspense>
            </PrivateRoute>
          }
        ></Route>

        <Route
          path="/communities"
          element={
            <PrivateRoute>
              <AllCommunicatiesPage />
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="/all-people"
          element={
            <PrivateRoute>
              <AllUsersPage />
            </PrivateRoute>
          }
        ></Route>

        <Route path="*" element={<PageNotFound />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
        <Route path="/loading" element={<LoadingPage />}></Route>
      </Routes>
      <ToastContainer position="bottom-right"/>
    </div>
    </BrowserRouter>
  
  );
}

export default App;

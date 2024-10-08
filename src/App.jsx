import React, { useState } from "react";
import Auth from "./pages/auth/Auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/post/Dashboard";
import Register from "./pages/auth/Register";
import Profile from "./pages/profilePage/Profile";
import { useSelector } from "react-redux";
import AllCommunicatiesPage from "./pages/communities/AllCommunicatiesPage";
import AllUsersPage from "./pages/users/AllUsersPage";
import LoadingPage from "./Components/Container/LoadingPage";
import ErrorPage from "./Components/Container/ErrorPage";

function App() {
  const accessToken = useSelector((state) => state.auth.accessToken);
  console.log("accessToken in app:", accessToken);

  const PrivateRoutes = ({ children }) => {
    return accessToken ? children : <Navigate to="/auth" />;
  };

  const AuthRoute = ({ children }) => {
    return !accessToken ? children : <Navigate to="/dashboard" />;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/auth"
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
            <PrivateRoutes>
              <Profile />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <Dashboard />
            </PrivateRoutes>
          }
        ></Route>

        <Route
          path="/communities"
          element={
            <PrivateRoutes>
              <AllCommunicatiesPage />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/all-people"
          element={
            <PrivateRoutes>
              <AllUsersPage />
            </PrivateRoutes>
          }
        ></Route>

        <Route path="/" element={<Auth />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { useState } from "react";

import Auth from "./pages/auth/Auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/post/Dashboard";
import Register from "./pages/auth/Register";
import Profile from "./pages/profilePage/Profile";
import { useSelector } from "react-redux";
import AllCommunicatiesPage from "./pages/communities/AllCommunicatiesPage";
import AllUsersPage from "./pages/users/AllUsersPage";

function App() {
  const login = useSelector((state) => state.auth.login);
  // console.log("login", login);

  const PrivateRoutes = ({ children }) => {
    return login ? children : <Navigate to="/auth" />;
  };

  const AuthRoute = ({ children }) => {
    return !login ? children : <Navigate to="/dashboard" />;
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
        <Route path="/all-people" element={
          <PrivateRoutes>
            <AllUsersPage />
          </PrivateRoutes>
        }></Route>

        <Route path="/register" element={<Register />}></Route>
        {/* <Route path="*" element={<Auth />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

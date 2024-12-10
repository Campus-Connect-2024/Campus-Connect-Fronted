import React from "react";
import Auth from "./pages/auth/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/post/Dashboard";
import Register from "./pages/auth/Register";
import Profile from "./pages/profilePage/Profile";
import AllCommunicatiesPage from "./pages/communities/AllCommunicatiesPage";
import AllUsersPage from "./pages/users/AllUsersPage";
import { LoadingPage } from "./Components/index.js";
import ErrorPage from "./pages/ErrorPage.jsx";
import PrivateRoute from "./utils/PrivateRoute.jsx";
import AuthRoute from "./utils/AuthRoute.jsx";

function App() {

  return (
    <BrowserRouter>
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
              <Dashboard />
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

        <Route path="/*" element={<Auth />}></Route>
        <Route path="/error" element={<ErrorPage />}></Route>
        <Route path="/loading" element={<LoadingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

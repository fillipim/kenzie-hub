import { useContext, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/AuthContext";

import api from "../../services/api";

const ProtectedRoutes = () => {
  const { user, isLoad, setUser, setIsload, searchUser } = useContext(UserContext);

  useEffect(() => {
    searchUser()
},[]);

  if (isLoad) {
    return null;
  }
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;

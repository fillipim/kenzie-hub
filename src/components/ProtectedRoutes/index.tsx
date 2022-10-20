import { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../contexts/AuthContext";

import Loading from "../Loading";

const ProtectedRoutes = () => {
  const { user, isLoad, searchUser } = useUserContext();

  useEffect(() => {
    searchUser()
},[]);

  if (isLoad && !user) {
    return <Loading/> ;
  }
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoutes;

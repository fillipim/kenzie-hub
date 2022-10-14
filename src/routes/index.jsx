import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import SingIn from "../components/SinginForm";
import SingUp from "../components/SingUpForm";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route index element={<SingIn />} />
      <Route path="/singUp" element={<SingUp />} />
      <Route path="*" element={<SingIn/>}/>
    </Route>
    <Route element={<ProtectedRoutes />}>
    <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
);

export default MainRoutes;

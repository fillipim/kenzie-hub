import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "../components/ProtectedRoutes";
import SingInForm from "../components/SinginForm";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route index element={<SingInForm />} />
    </Route>
    <Route element={<ProtectedRoutes />}>
    <Route path="/dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
);

export default MainRoutes;

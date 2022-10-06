import { Route, Routes } from "react-router-dom";
import SingInForm from "../components/SinginForm";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />}>
      <Route index element={<SingInForm />} />
    </Route>
    <Route path="/dashboard" element={<Dashboard />} />
  </Routes>
);

export default MainRoutes;

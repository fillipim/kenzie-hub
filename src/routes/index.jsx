import { Route, Routes } from "react-router-dom";
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
    <Route path="/dashboard/:id" element={<Dashboard />} />
  </Routes>
);

export default MainRoutes;

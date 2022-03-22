import { Routes, Route } from "react-router-dom";
import { Home, Navbar, Footer, } from "./RoutesComponent";

import Error404 from "../Components/Pages/PagesBanco/Error404";

const Rutas = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Rutas;

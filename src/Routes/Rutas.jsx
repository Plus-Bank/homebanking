import { Routes, Route } from "react-router-dom";
import { Home, Navbar, Footer, SingIn,  } from "./RoutesComponent";

const Rutas = () => {
  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/singin" element={<SingIn />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Rutas;

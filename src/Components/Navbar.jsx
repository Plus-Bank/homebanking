import logo from "../Assets/logo.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
            <div className="navbar-brand">
            <img src={logo} alt="" style={{ height: "50px" }} />
            </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto me-2 mb-lg-0">
              <li className="nav-item me-4">
                <button className="btnSingIn">Sing In</button>
              </li>
              <li className="">
                <button className="btnSingUp">Sing Up</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export { Navbar };

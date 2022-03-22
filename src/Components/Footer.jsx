import logo from '../Assets/logo.png'

const Footer = () => {
  return (
    <div className="footer">
      <img src={logo} alt="" style={{height:'50px'}}/>
      <div className="text-center">
      <span className="text-white mb-3">
      |  &copy; {new Date().getFullYear()} Copyright | Plus Bank S.A & Grupo 42
      </span>
      </div>
    </div>
  );
};

export { Footer }

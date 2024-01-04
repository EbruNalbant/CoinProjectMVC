import { Link, NavLink } from "react-router-dom";

const HeaderView = () => {
  return (
    <header>
      <Link to={"/home"} className="c-logo">
        <img src="/c-logo.png" alt="logo" />
        <h3 className="text-white">Coin World</h3>
      </Link>
      <div className="links">
        <NavLink to={"/"}>Log In</NavLink>
        <NavLink to={"/home"}>Home</NavLink>
      </div>
    </header>
  );
};

export default HeaderView;

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1>title</h1>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="ad">Ad</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

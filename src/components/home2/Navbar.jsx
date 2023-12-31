/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Navbar.css";
import avatar from "./avatar.svg";

const Navbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="navbar__left">
       
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="navbar__right">
        <a href="#!">
          <img style={{maxWidth: '5%'}} src={avatar} alt="avatar" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
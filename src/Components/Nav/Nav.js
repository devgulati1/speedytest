import logo from "./../../assets/logo.png"
import "./Nav.css"
const Nav=()=>{
    return<div className="nav-container">
      <div className="nav-left">
          <img className="flashlogo"  src={logo} alt="logo"></img>
          <p className="flash-logo-text">SPEEDYTEST</p>

      </div>
      <div className="nav-right">
        <h1>By Dev</h1>
      </div>

    </div>
}
export default Nav;
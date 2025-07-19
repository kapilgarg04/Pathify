import React from "react";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
function Navbar() {
  return (
    <div className="nav">
      <div className="nav-left">
        <div className="title">
          <ViewInArIcon className="icon"></ViewInArIcon>Pathify
        </div>
        <div className="options">
          <ul>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
      <div>
        <button className="btn btn1">Sign In</button>
        <button className="btn">Get Started</button>
      </div>
    </div>
  );
}
export default Navbar;

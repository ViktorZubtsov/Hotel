import React from "react";
import "./header.css"
import Menu from "../menu/Menu";

class Header extends React.Component{

  render() {
    const menuData = [
 1,2,3,2,3,324345,
    ];

    return (
        <header className="header">
          <div>
            logo
          </div>
          <Menu
              numbers={[2,4]}
          />
        </header>
    )
  }
}
export default Header
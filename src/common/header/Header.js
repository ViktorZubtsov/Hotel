import React from "react";
import "./header.css"
import NavBar from "../nav-bar/NavBar";
import AuthBtn from "../auth-btn/AuthBtn";


class Header extends React.Component{

  render() {
    const links = [
      {
        link: '#',
        text: 'О нас'
      },
      {
        link: '#',
        text: 'Услуги'
      },
      {
        link: '#',
        text: 'Вакансии'
      },
      {
        link: '#',
        text: 'Новости'
      }
    ];

    return (
        <header className="header">
          <div>
            logo
          </div>
          <div>
            <NavBar
                linkList={links}
            />
          </div>
          <div>
            <AuthBtn/>
          </div>
        </header>
    )
  }
}
export default Header
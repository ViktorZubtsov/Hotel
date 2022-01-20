import React from "react";
import "./header.css"


class Header extends React.Component{

  render() {
    const menuData = [
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
        text: 'О нас'
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
              sdsd
            </div>
        </header>
    )
  }
}
export default Header
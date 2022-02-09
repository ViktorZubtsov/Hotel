import "./header.scss"
import logo from '../../assets/img/Logo.svg'
import Menu from "../Menu/Menu";
import AuthBlock from "./AuthBlock/AuthBlock";

const Header = () => {
    const links = [
        {
            name: "O нас",
            link: '/',
        },
        {
            name: "Услуги",
            link: '/rooms',
        }

    ];
  return (
      <header className='header'>
        <div className="container">
            <img src={logo} alt="logo"/>
            <div className="header-inner">
                <Menu
                    links={links}
                />
                <AuthBlock
                />
            </div>
        </div>
      </header>
  )
}
export default Header
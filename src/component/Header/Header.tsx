import "./header.scss"
import logo from '../../assets/img/Logo.svg'
import Menu from "../Menu/Menu";
import AuthBlock from "./AuthBlock/AuthBlock";

const Header = () => {
    const links = [
        {
            name: "O нас",
            link: '/about',
        },
        {
            name: "Услуги",
            link: '/te',
        }

    ];
  return (
      <header className='header'>
          derrerer
        {/*<div className="container">*/}
        {/*    <img src={logo} alt="logo"/>*/}
        {/*    <div className="header-inner">*/}
        {/*        <Menu*/}
        {/*            links={links}*/}
        {/*        />*/}
        {/*        <AuthBlock*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*</div>*/}
      </header>
  )
}
export default Header
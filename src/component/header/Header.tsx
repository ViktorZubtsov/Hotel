import "./header.scss"
import logo from '../../assets/img/Logo.svg'
import Menu from "../menu/Menu";

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
        <div className="container">
            <img src={logo} alt="logo"/>
            <div>
                <Menu
                    links={links}
                />
            </div>
        </div>
      </header>
  )
}
export default Header
import "./header.scss"
import logo from '../../assets/img/Logo.svg'

const Header = () => {
  return (
      <header className='header'>
        <div className="container">
            <img src={logo} alt="logo"/>
        </div>
      </header>
  )
}
export default Header
import "./footer.scss"
import Menu from "../Menu/Menu";

const Footer = () => {
  const links = [
    {
      name: "O нас",
      link: '/',
    },
    {
      name: "Услуги",
      link: '/rooms',
    },
    {
      name: "O нас",
      link: '/',
    },
    {
      name: "Услуги",
      link: '/rooms',
    },
    {
      name: "O нас",
      link: '/',
    }

  ];
  return(
      <footer className="footer">
        <div className="container footer__content">
          <Menu
              links={links}
          />
          <Menu
              links={links}
          />
          <Menu
              links={links}
          />
          <div>
            <input
                type="text"
            />
            <button>click</button>
          </div>
        </div>
      </footer>
  )
}
export default Footer
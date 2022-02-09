import "./footer.scss"
import Menu from "../Menu/Menu";
import {useRef} from "react";

const Footer = () => {
  const links = [
    {
      name: "O на drс",
      link: '/',
    },


  ];
  const test = () => {
    // @ts-ignore
    console.log(inputValue.current.value)
  }
  const inputValue = useRef(null);
  return(
      <footer className="footer">
        <div className="container footer__content">
            <Menu
                links={links}
            />

          <div>
            <input
                ref={inputValue}
                type="text"
            />
            <button onClick={test}>click</button>
          </div>
        </div>
      </footer>
  )
}
export default Footer
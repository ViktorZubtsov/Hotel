import { Outlet } from "react-router-dom";
import Footer from "../../component/Footer/Footer";
import {Theme} from "../../common/context/Theme";
import {useState} from "react";
Theme.displayName = 'Theme';
const Default = () => {
  // @ts-ignore

  const toggleTheme = () => {
    return setState((prevState)=>{
      return {...prevState, ...{
        bg: (prevState.bg === 'black')? 'blue' : 'black'
      }}
    }  )
  }
  const [state, setState] = useState({
    bg: 'black',
    toggle: toggleTheme
  })
  return(
      <>

        <Theme.Provider value={state}>
          <Outlet/>
          <Footer/>
        </Theme.Provider>
      </>
  )
}
export default Default
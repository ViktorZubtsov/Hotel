import ReactDOM from "react-dom";
import {useEffect} from "react";
const HelpCardRoot = document.getElementById('help-card-root');


const HelpCard = () => {
  const el = document.createElement('div');
  // @ts-ignore
  useEffect(()=>{
    // @ts-ignore
    HelpCardRoot.appendChild(el)
    // @ts-ignore
    return  ()=> {HelpCardRoot.removeChild(el)}
  }, [])


  return ReactDOM.createPortal((
       <div style={{
         background: 'blue',
         width: '80px',
         height: '100px',
         position: 'absolute',
         bottom: '0',
         left: '0'
       }}>
         HelpCard
       </div>
  ), el)
}

export default HelpCard
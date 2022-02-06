import './app.scss';
import { Routes, Route } from "react-router-dom";
import Default from "../Layouts/Default";
import Main from "./Main";
import Rooms from "./Rooms";
import Auth from "./Auth";


const App = ()=>  {
  return (
      <Routes>
          <Route path="/" element={<Default/>}>
            <Route index element={<Main/>}/>
            <Route  path="rooms/*" element={<Rooms/>} />
            <Route  path="auth" element={<Auth/>} />
            <Route path="*" element={<div>404</div>}/>
          </Route>
      </Routes>
  );
}
export default App;
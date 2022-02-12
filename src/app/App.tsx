import './app.scss';
import { Routes, Route } from "react-router-dom";
import Default from "../Layouts/Default";
import Main from "./Main";
import Auth from "./Auth";
import Rooms from "./Rooms";
import NotFound from "./NotFound";


const App = ()=>  {
  return (
      <Routes>
        <Route path="/" element={<Default/>}>
          <Route index element={<Main/>}/>
          <Route  path="rooms/*" element={<Rooms/>} />
          <Route  path="auth" element={<Auth/>} />
          <Route path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
  );
}
export default App;
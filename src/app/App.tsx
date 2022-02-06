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

// function App() {
//   return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="users/*" element={<Users />} />
//         </Routes>
//       </BrowserRouter>
//   );
// }
//
// function Users() {
//   return (
//       <div>
//         <nav>
//           <Link to="me">My Profile</Link>
//         </nav>
//
//         <Routes>
//           <Route path=":id" element={<UserProfile />} />
//           <Route path="me" element={<OwnUserProfile />} />
//         </Routes>
//       </div>
//   );
// }
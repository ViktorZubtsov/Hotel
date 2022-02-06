import { Routes, Route } from "react-router-dom";
import Content from "./Content";
import Room from "./Room";
const Rooms = () => {
  return(
       <Routes>
         <Route path=":id" element={<Room/>} />
         <Route path="/" element={<Content/>} />
       </Routes>
  )
}
export default Rooms
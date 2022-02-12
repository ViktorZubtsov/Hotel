import './app.scss';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from "react-router-dom";
import Default from "../Layouts/Default";

const  Main = lazy(()=> import('./Main'));
const  Rooms = lazy(()=> import('./Rooms'));
const  Auth = lazy(()=> import('./Auth'));
const  NotFound = lazy(()=> import('./NotFound'));

const App = ()=>  {
  return (
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<Default/>}>
            <Route index element={<Main/>}/>
            <Route  path="rooms/*" element={<Rooms/>} />
            <Route  path="auth" element={<Auth/>} />
            <Route path="*" element={<NotFound/>}/>
          </Route>
        </Routes>
      </Suspense>

  );
}
export default App;
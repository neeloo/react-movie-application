import AddMovie from "./component/AddMovie";
import Card from "./component/Card";
import Header from "./component/Header";
import { Route, Routes } from 'react-router-dom'
import Detail from "./component/Detail";
import { createContext, useEffect, useState } from "react";
import Login from "./component/Login";
import Sign from "./component/Sign";

const Appstate = createContext();

function App() {
  const[login,setlogin]=useState(false);
  const[username,setusername]=useState("");

  return (
    <Appstate.Provider value={{login,username,setlogin,setusername}}>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/addmovie" element={<AddMovie />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign />} />
        </Routes>
      </div>
    </Appstate.Provider>
  );
}

export default App;
export {Appstate};

import AddMovie from "./component/AddMovie";
import Card from "./component/Card";
import Header from "./component/Header";
import { Route, Routes } from 'react-router-dom'
import Detail from "./component/Detail";

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={ <Card />} />
        <Route path="/addmovie" element={ <AddMovie/>} />
        <Route path="/detail/:id" element={ <Detail/>} />
      </Routes>
    </div>
  );
}

export default App;

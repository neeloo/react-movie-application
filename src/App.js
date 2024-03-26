import AddMovie from "./component/AddMovie";
import Card from "./component/Card";
import Header from "./component/Header";
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App relative">
      <Header />
      <Routes>
        <Route path="/" element={ <Card />} />
        <Route path="/addmovie" element={ <AddMovie/>} />
      </Routes>
    </div>
  );
}

export default App;

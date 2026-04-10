
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Lyout from "./Lyout/Lyout";
import PageNotFound from "./PageNotfound";
function App() {

  

  return (
    <div>
      <Routes>
        <Route>
          <Route path="" element={<Lyout></Lyout>} />
          <Route path="/Home" element={<Home></Home>} />
          <Route path="/About" element={<About></About>} />
          <Route path="*" element={<PageNotFound></PageNotFound>} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;





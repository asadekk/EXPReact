
import { Routes, Route} from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Lyout from "./Lyout/Lyout";
import PageNotFound from "./PageNotfound";
import Artikal from "./Page/Artikal"
import UsersDatils from "./Page/UsersDatils";

function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Lyout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="artikal" element={<Artikal />} />
          <Route path='/users/:id' element={<UsersDatils></UsersDatils>} />
        </Route>


        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;





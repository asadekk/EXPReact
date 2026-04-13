
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Lyout from "./Lyout/Lyout";
import PageNotFound from "./PageNotfound";
import Artikallyout from "./Lyout/Artikallyout";
import Artikal from "./Page/Artikal"
import ArtikalDatels from "./Page/ArtikalDatels";
function App() {
  return (
    <div>
      <Routes>

        <Route path="/" element={<Lyout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />


          <Route path="artikal" element={<Artikallyout />}>
            <Route index element={<Artikal />} />
            <Route path=':id' element={<ArtikalDatels></ArtikalDatels>} />
          </Route>
        </Route>


        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;





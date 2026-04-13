import { Link } from "react-router-dom";
import "./App.css";

function PageNotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Bunday sahifa mavjud emas</p>

      <Link to="/" className="btn">
        Go Home
      </Link>
      <Link to={'/Home'}>qaytish</Link>
    </div>
  );
}

export default PageNotFound;
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link className="converter-title" to="/">
        Converter
      </Link>

      <Link className="rates-title" to="/rates">
        Current Exchange Rates
      </Link>
    </header>
  );
}

export default Header;

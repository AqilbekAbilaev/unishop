import { Link, Outlet } from "react-router-dom";

import logo from "../../assets/unishop.svg";
import "./navigation.styles.scss";

const Navigation = () => {
  return (
    <>
      <header className="header">
        <div className="navigation-container">
          <Link to='/main' className="logo">
            <img src={logo} alt="logo" />
          </Link>

          <div className="links">
            <Link className="link" to="sell">
              New Sell
            </Link>
            <Link className="link" to="finance">
              Finance
            </Link>
            <Link className="link" to="customers">
              Customers
            </Link>
            <Link className="link" to="warehouse">
              Warehouse
            </Link>
            <Link className="link" to="loans">
              Loans
            </Link>
            <Link className="link" to="staff">
              Staff
            </Link>
          </div>
        </div>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </>
  );
};

export default Navigation;

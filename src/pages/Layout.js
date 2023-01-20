import { Outlet, Link } from "react-router-dom";
import "../App.css";
import hamburger from "../images/hamburger.jpg";

const Layout = () => {
	return (
		<>
			<nav className="navbar">
				<ul className="nav-items1">
					<li>
						<Link to="/">Gourmet au Catering</Link>
					</li>
					<div className="nav-items2">
						<li>
							<Link to="/about">About</Link>
						</li>
						<li>
							<Link to="/menu">Menu</Link>
						</li>
						<li>
							<Link to="/contact">Contact</Link>
						</li>
					</div>
				</ul>
			</nav>
			<img
				class="hamburger"
				src={hamburger}
				alt="Hamburger Catering"
				width="1600"
				height="800"
			></img>

			<Outlet />
		</>
	);
};

export default Layout;

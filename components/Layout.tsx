import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ mobile, children }) {
	return (
		<div className="page-container">
			<div className="wrapper">
				<Navbar mobile={mobile} />
				{children}
			</div>
			<Footer />
		</div>
	);
}

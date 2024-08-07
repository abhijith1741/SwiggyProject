import ReactDOM from "react-dom/client"

const Header = () => {
	return (
		<div className="header">
			<div className="logo-container">
				<img className="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/360_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg" alt="" />
			</div>
			<div className="nav-item">
				<ul>
					<li>Home</li>
					<li>About</li>
					<li>Contact Us</li>
					<li>Cart</li>
				</ul>
			</div>
		</div>
	)
}

const AppLayout = () => {
	return (
		<div className="app">
			<Header />
		</div>
	)
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout />)
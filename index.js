import ReactDOM from "react-dom/client";

const header = (
	<h1 className="header" tabIndex="1">
		Welcome
	</h1>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(header);

import "./Videos.css";
import React from "react";
import Videocard from "./Videocard";

function Videos() {
	return (
		<div className="videos">
			<h2>Recommended videos</h2>
			<div className="videos__videocard">
				<Videocard />
				<Videocard />
				<Videocard />
				<Videocard />
				<Videocard />
				<Videocard />
				<Videocard />
				<Videocard />
				<Videocard />
				<Videocard />
				<Videocard />
				<Videocard />
			</div>
		</div>
	);
}

export default Videos;

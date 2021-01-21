import "./Searchpage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import React from "react";
import ChannelRow from "./ChannelRow";

function Searchpage() {
	return (
		<div className="searchpage">
			<div className="searchpage__filter">
				<TuneOutlinedIcon />
				<h2>FILTER</h2>
			</div>
			<hr />

			<ChannelRow
				image="https://avatars3.githubusercontent.com/u/55451558?s=460&u=3794d7f151919cde406484e011c6a6786897531f&v=4"
				channel="Ashish Kumar"
				verified
				subs="660K"
				noOfVideos={382}
				description="You can find awesome vlogs here which can add vakue to your life."
			/>
		</div>
	);
}

export default Searchpage;

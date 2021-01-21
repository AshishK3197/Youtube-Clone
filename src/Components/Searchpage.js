import "./Searchpage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";
import React from "react";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

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

			<hr />

			<VideoRow
				views="1.4M"
				subs="659K"
				description="Lorem ipsum dolor sit am"
				timestamp="59 seconds ago"
				channel="Ashish Kumar"
				title="🔴 LETS GO!"
				image="https://"
			/>
		</div>
	);
}

export default Searchpage;

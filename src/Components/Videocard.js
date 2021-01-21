import React from "react";
import { Avatar } from "@material-ui/core";
import "./Videocard.css";

function Videocard({ image, title, channel, views, timestamp, channelImage }) {
	return (
		<div className="videocard">
			<img className="videocard__thumbnail" src={image} alt="" />
			<div className="videocard__info">
				<Avatar
					className="videocard__avatar"
					alt={channel}
					src={channelImage}
				/>
				<div className="videocard__text">
					<h4>{title}</h4>
					<p>{channel}</p>
					<p>
						{views} . {timestamp}
					</p>
				</div>
			</div>
		</div>
	);
}

export default Videocard;

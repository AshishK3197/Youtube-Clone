import "./Header.css";
import React, { useState } from "react";
import MenuSharpIcon from "@material-ui/icons/MenuSharp";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function Header() {
	const [inputSearch, setInputSearch] = useState("");

	return (
		<div className="header">
			<div className="header__left">
				<MenuSharpIcon />
				<Link to="/">
					<img
						className="header__logo"
						src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg"
						alt=""
					/>
				</Link>
			</div>
			<div className="header__input">
				<input
					value={inputSearch}
					onChange={(e) => setInputSearch(e.target.value)}
					placeholder="Search"
					type="text"
				/>
				<Link to={`/search/${inputSearch}`}>
					<SearchIcon className="header__inputButton" />
				</Link>
			</div>
			<div className="header__right">
				<VideoCallIcon className="header__icons" />
				<AppsIcon className="header__icons" />
				<NotificationsIcon className="header__icons" />
				<Avatar
					alt="Ashish Kumar"
					src="https://avatars3.githubusercontent.com/u/55451558?s=460&u=3794d7f151919cde406484e011c6a6786897531f&v=4"
				/>
			</div>
		</div>
	);
}

export default Header;

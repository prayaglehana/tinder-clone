import React from "react";
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";
import "./Header.css";
import tinder_logo from "./images/tinder-logo.png";
import { Button } from "react-bootstrap";

const Header = (props) => {
	

	return (
		<div className="header">
			<IconButton>
				<PersonIcon className="header__icon" fontSize="large" />
			</IconButton>

			<img className="header__logo" src={tinder_logo} alt="tinder-logo" />
			<IconButton>
				<ForumIcon className="header__icon" fontSize="large" />
			</IconButton>

		</div>
	);
};

export default Header;

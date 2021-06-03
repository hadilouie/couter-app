import React from "react";

export const NavBar = ({ totalNumber }) => {
	return (
		<div>
			<React.Fragment>
				<nav className="navbar navbar-light bg-light">
					<a className="navbar-brand" href="#">
						Navbar{" "}
						<span class="badge badge-pill badge-secondary">{totalNumber}</span>
					</a>
				</nav>
				;
			</React.Fragment>
		</div>
	);
};

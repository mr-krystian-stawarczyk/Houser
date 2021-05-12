import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components/macro";
import { Link as LinkS } from "react-scroll";
import { menuData } from "../data/MenuData";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const Nav = styled.nav`
	position: sticky;
	background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")};
	height: 60px;
	display: flex;
	justify-content: space-between;
	padding: 1rem 2rem;
	width: 100%;
	top: 0;
	right: 0;
	left: 0;
	margin-top: -60px;
	align-items: center;
	font-size: 1rem;
	top: 0;
	z-index: 9999999;
	transition: 0.3s ease-in-out;
`;

const NavLink = css`
	color: #fff;
	display: flex;
	align-items: center;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;
	text-decoration: none;
`;

const Logo = styled(LinkS)`
	${NavLink}
	font-style: italic;
`;

const NavMenu = styled.div`
	display: flex;
	align-items: center;
	margin-right: -48px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const NavMenuLinks = styled(Link)`
	${NavLink}
`;

const NavBtn = styled.div`
	display: flex;
	align-items: center;
	margin-right: 24px;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 30) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", changeNav);
	}, []);

	return (
		<Nav scrollNav={scrollNav}>
			<Logo to="/" onClick={toggle}>
				Houser®
			</Logo>

			<NavMenu>
				{menuData.map((item, index) => (
					<NavMenuLinks to={item.link} key={index}>
						{item.title}
					</NavMenuLinks>
				))}
			</NavMenu>
			<NavBtn>
				<Button to="/contact" primary="true">
					Contact Us{" "}
				</Button>
			</NavBtn>
		</Nav>
	);
};

export default Navbar;

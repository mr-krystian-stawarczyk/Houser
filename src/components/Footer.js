import React from "react";

import {
	FaFacebook,
	FaInstagram,
	FaYoutube,
	FaTwitter,
	FaLinkedin,
} from "react-icons/fa";

import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
	background-color: #101522;
`;

export const FooterWrap = styled.div`
	padding: 48px;
	display: flex;
	flex-direction: row-reverse;
	justify-content: center;
	align-items: center;
	max-width: 1100px;
	margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
	display: flex;
	justify-content: center;

	@media screen and (max-width: 820px) {
		padding-top: 32px;
	}
`;

export const FooterLinksWrapper = styled.div`
	display: flex;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 16px;
	text-align: center;
	width: 130px;
	box-sizing: border-box;
	color: #fff;

	@media screen and (max-width: 420px) {
		margin: 0;
		padding: 10px;
		width: 100%;
	}
`;

export const FooterLinkTitle = styled.h1`
	font-size: 14px;
	margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
	color: #fff;
	text-decoration: none;
	margin-bottom: 0.5rem;
	font-size: 14px;

	&:hover {
		color: #eb606b;
		transition: 0.3s ease-out;
	}
`;

export const SocialMedia = styled.section`
	max-width: 1000px;
	width: 100%;
`;
export const SocialMediaWrap = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 1100px;
	margin: 100px auto 0 auto;

	@media screen and (max-width: 820px) {
		flex-direction: column;
	}
`;

export const SocialLogo = styled(Link)`
	color: #fff;
	justify-self: start;
	cursor: pointer;
	text-decoration: none;
	font-size: 1.5rem;
	display: flex;
	align-items: center;
	margin-bottom: 16px;
	font-weight: bold;
`;
export const WebsiteRights = styled.small`
	color: #fff;
	margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 240px;
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px;
`;

const Footer = () => {
	return (
		<FooterContainer>
			<FooterWrap>
				<FooterLinksContainer>
					<FooterLinksWrapper>
						<FooterLinkItems>
							<FooterLinkTitle>About us</FooterLinkTitle>

							<FooterLink to="/">How it works</FooterLink>
							<FooterLink to="/">Testimonials</FooterLink>
							<FooterLink to="/">Career</FooterLink>
							<FooterLink to="/">Investors</FooterLink>
							<FooterLink to="/">Terms of service</FooterLink>
						</FooterLinkItems>

						<FooterLinkItems>
							<FooterLinkTitle>Social Media</FooterLinkTitle>

							<FooterLink to="/">Instagram</FooterLink>
							<FooterLink to="/">Facebook</FooterLink>
							<FooterLink to="/">Youtube</FooterLink>
							<FooterLink to="/">Twitter</FooterLink>
						</FooterLinkItems>
					</FooterLinksWrapper>
				</FooterLinksContainer>

				<SocialMedia>
					<SocialMediaWrap>
						<SocialLogo to="/">
							Houser® <br></br>
						</SocialLogo>
						<WebsiteRights>
							Houser® {new Date().getFullYear()}
							<br></br>
							All rights reserved
						</WebsiteRights>
						<SocialIcons>
							<SocialIconLink href="/" target="_blank" aria-label="Facebook">
								<FaFacebook />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Instagram">
								<FaInstagram />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Youtube">
								<FaYoutube />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Twitter">
								<FaTwitter />
							</SocialIconLink>
							<SocialIconLink href="/" target="_blank" aria-label="Linkedin">
								<FaLinkedin />
							</SocialIconLink>
						</SocialIcons>
					</SocialMediaWrap>
				</SocialMedia>
			</FooterWrap>
		</FooterContainer>
	);
};

export default Footer;

import React from "react";
import styled, { css } from "styled-components";

import {
  Colors,
  TwitterIcon,
  ContentHeadingH3White,
  LoveIcon,
  mediaQuery,
} from "../Common";

const FooterContainer = styled.footer`
  color: ${Colors.GreyWhite};
  background-color: ${Colors.Black};
  text-align: center;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 2fr 1fr;
  ${mediaQuery.mobile(css`
    grid-template-columns: 1fr;
  `)}
  justify-items: center;
  padding: 5px 20px 0px;
  margin-top: 20px;
`;

const AboutContainer = styled.div``;
const ContactContainer = styled.div``;
const ContactInfo = styled.div``;
const SocialIcons = styled.div``;
const HR = styled.hr`
  border-top: 0.2px solid ${Colors.GreyWhite};
  width: 90%;
  margin: 50px auto;
`;
const LoveText = styled.span`
  color: ${Colors.White};
  padding-bottom: px;
`;
const Footer = () => (
  <FooterContainer>
    <FooterContent>
      <AboutContainer>
        <ContentHeadingH3White>About Us</ContentHeadingH3White>
        <p>
          Do you want to be even more successful? Learn to love learning and
          growth. The more effort you put into improving your skills, the bigger
          the payoff you will get. Realize that things will be hard at first,
          but the rewards will be worth it.
        </p>
      </AboutContainer>

      <ContactContainer>
        <ContentHeadingH3White>Contact us</ContentHeadingH3White>
        <ContactInfo>
          <span></span>
          <h5>Los angeles, United States</h5>
          <p>659, Rocky beach bullevard, santa monica, Rocky beach, USA.</p>
        </ContactInfo>
        <ContactInfo>
          <span></span>
          <h5>+44 6532 986 652</h5>
          <p>Mon to Fri 9am to 6 pm.</p>
        </ContactInfo>
      </ContactContainer>
      <SocialIcons>
        <ContentHeadingH3White>Social Links</ContentHeadingH3White>
      </SocialIcons>
    </FooterContent>
    <HR />
    <LoveText>
      Made with{" "}
      <LoveIcon height="15px" width="15px" fillColor={Colors.LoveRed} />
    </LoveText>
  </FooterContainer>
);

export default Footer;

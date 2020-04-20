import React from "react";
import styled from "styled-components";

import { Anchor, Colors } from "../Common";

const HeaderContainer = styled.header`
  background-color: ${Colors.ClearChillBlue};
`;
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 5px;
`;

const LogoContanier = styled.div`
  flex-grow: 5;
`;
const HeaderLinkContainer = styled.div`
  flex-grow: 10;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;
const HeaderAnchor = styled(Anchor)`
  margin: 5px 10px;
  line-height: 30px;
  color: ${Colors.White};
`;
const Header = () => (
  <HeaderContainer>
    <Navbar>
      <LogoContanier>Logo</LogoContanier>
      <HeaderLinkContainer>
        <HeaderAnchor>Home</HeaderAnchor>
        <HeaderAnchor>About Us</HeaderAnchor>
        <HeaderAnchor>Login</HeaderAnchor>
      </HeaderLinkContainer>
    </Navbar>
  </HeaderContainer>
);

export default Header;

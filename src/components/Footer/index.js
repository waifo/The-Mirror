import React from "react";
import styled from "styled-components";

import { Colors } from "../Common";

const FooterContainer = styled.div`
  color: ${Colors.White};
  background-color: ${Colors.ShadowedSteelGrey};
  text-align: center;
  line-height: 40px;
  margin-top: 20px;
`;

const Footer = () => <FooterContainer>Footer</FooterContainer>;

export default Footer;

import React from "react";
import { createGlobalStyle } from "styled-components";

import { Colors } from "./components/Common";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { MainContentSection, SubContent } from "./components/Layout";

import TitilliumWebRegular from "./font/TitilliumWeb-Regular.ttf";
import TitilliumWebLight from "./font/TitilliumWeb-Light.ttf";
import TitilliumWebExtraLight from "./font/TitilliumWeb-ExtraLight.ttf";

const GlobalStyle = createGlobalStyle`
body{
  padding:0px;
  margin:0px;
  @font-face{
    font-family: Titillium Web Regular;
    src:url(${TitilliumWebRegular});
    font-weight:400;
    font-style:normal;
  };
  @font-face{
    font-family: Titillium Web Light;
    src:url(${TitilliumWebLight});
    font-weight:300;
    font-style:normal;
  };
  @font-face{
    font-family: Titillium Web Extra Light;
    src:url(${TitilliumWebExtraLight});
    font-weight:200;
    font-style:normal;
  };

  font-family: Titillium Web Regular, Sans Serif ;
  background-color:${Colors.White}
}
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <MainContentSection />
      <SubContent />
      <Footer />
    </div>
  );
}

export default App;

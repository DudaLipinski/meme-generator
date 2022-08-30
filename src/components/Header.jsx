import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70px;
  background: linear-gradient(90deg, #672280 1.18%, #a626d3 100%);
  box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
`;

const CenteredContent = styled.div`
  width: 100%;
  max-width: 855px;
  transition: all 1s;
`;

const Logo = styled.img`
  width: auto;
  height: auto;
`;

function Header() {
  return (
    <Wrapper>
      <CenteredContent>
        <Logo src={logo} />
      </CenteredContent>
    </Wrapper>
  );
}

export default Header;

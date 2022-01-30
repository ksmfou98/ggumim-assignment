import React from "react";
import IntroContentsViewer from "components/IntroContentsViewer";
import styled from "styled-components";

function HouseIntroPage() {
  return (
    <Container>
      <IntroContentsViewer />
    </Container>
  );
}

const Container = styled.div`
  width: 800px;
  margin: 0 auto;
  padding: 110px 0;
`;

export default HouseIntroPage;

import React, { useState } from "react";
import Slicer from "./Slicer";

import { Container } from "./styles";

const HomePage: React.FC = () => {

  return (
    <Container>
      <Slicer stage={0} />
      
    </Container>
  );
};

export default HomePage;

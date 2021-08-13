import React from "react";
import { useState } from "react";
import { TableProjects } from "../../../components/TableProjects";
// import { Container } from './styles';

const Slicer = (props: { stage: number }) => {
  var { stage } = props;

  const [step, setStep] = useState(stage);

  const sliceWelcome = () => (
    <h1>
      Oi, meu nome é Everton, sou programador, e estava imaginando qual seria a
      melhor forma de mostrar meus conhecimentos...
    </h1>
  );
  const sliceMe = () => (
    <h1>
      Então eu descobri que poderia deixar você mesmo decidir qual habilidade
      gostaria de ver
    </h1>
  );

  const sliceMenu = () => {

    return (
      <>
        <h1>Aqui segue algumas de minhas skills em React + Java</h1>
        <TableProjects />
        <h4>Lembrando que você pode acessar esse código <a href="https://github.com/vaieverton/portfolio-dev">aqui</a></h4>
      </>
    )
  };

  const redirectToMenu = () => {
    
  }

  /**
   * @description This function decides which slide to display based
   * on the stage param. (Might not be the best way to do, what do you think?)
   * @param { Number } stage Current stage
   */
  const showCurrentSlide = (stage: number) => {
    switch (stage) {
      case 0:
        return sliceWelcome();
      case 1:
        return sliceMe();
      case 2:
        return sliceMenu();
      case 3:
        return redirectToMenu();

      default:
        return sliceWelcome();
    }
  };

  return (
    <>
      <button type="button" onClick={() => setStep((step) => step - 1)}>
        <i className="pi pi-left-arrow">{"<"}</i>
      </button>
      {showCurrentSlide(step)} 
      <button type="button" onClick={() => setStep((step) => (step + 1))}>
        <i className="pi pi-left-arrow">{">"}</i>
      </button>
    </>
  );
};

export default Slicer;

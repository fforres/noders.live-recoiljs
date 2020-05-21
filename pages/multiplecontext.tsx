import * as React from "react";
import { Page, Box } from "../components/Elements";
import {
  Box1,
  Context,
  Context2,
  Context3,
  ContextProvider,
  ContextProvider2,
  ContextProvider3,
} from "../components/MultipleReactContextExample";

const ComponenteLejos1: React.FC<any> = (props) => {
  return (
    <Box>
      <Box1 />
    </Box>
  );
};

export default function Home() {
  return (
    <ContextProvider>
      <ContextProvider2>
        <ContextProvider3>
          <Page>
            <ComponenteLejos1 />
            <HoliYoTambienLoNecesito />
            <HoliYoNecesitoElOtroContext />
            <HoliYoNecesitoElTercerContext />
          </Page>
        </ContextProvider3>
      </ContextProvider2>
    </ContextProvider>
  );
}

const HoliYoTambienLoNecesito: React.FC<any> = () => {
  const { rerenderOne } = React.useContext(Context);
  return <Box>Hola, el valor es {rerenderOne.toString()}</Box>;
};

const HoliYoNecesitoElOtroContext: React.FC<any> = () => {
  const { rerenderTwo } = React.useContext(Context2);
  return <Box>Hola, el valor es {rerenderTwo.toString()}</Box>;
};

const HoliYoNecesitoElTercerContext: React.FC<any> = () => {
  const { rerenderThree } = React.useContext(Context3);
  return <Box>Hola, el valor es {rerenderThree.toString()}</Box>;
};

import * as React from "react";
import { Page, Box } from "../components/Elements";
import {
  Box1,
  Context,
  ContextProvider,
} from "../components/ReactContextExample";

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
      <Page>
        <ComponenteLejos1 />
        <HoliYoTambienLoNecesito />
      </Page>
    </ContextProvider>
  );
}

const HoliYoTambienLoNecesito: React.FC<any> = () => {
  const { rerenderOne } = React.useContext(Context);
  return <Box>Hola, el valor es {rerenderOne.toString()}</Box>;
};

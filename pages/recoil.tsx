import * as React from "react";
import { RecoilRoot } from "recoil";
import { Page, Box } from "../components/Elements";
import {
  Box1,
  useRecoilState1,
  useRecoilState2,
  useRecoilState3,
} from "../components/RecoilExample";

const ComponenteLejos1: React.FC<any> = (props) => {
  return (
    <Box>
      <Box1 />
    </Box>
  );
};

export default function Home() {
  return (
    <RecoilRoot>
      <Page>
        <ComponenteLejos1 />
        <HoliYoTambienLoNecesito />
        <HoliYoNecesitoElOtroContext />
        <HoliYoNecesitoElTercerContext />
      </Page>
    </RecoilRoot>
  );
}

const HoliYoTambienLoNecesito: React.FC<any> = () => {
  const [rerenderOne] = useRecoilState1();
  return <Box>Hola, el valor es {rerenderOne.toString()}</Box>;
};

const HoliYoNecesitoElOtroContext: React.FC<any> = () => {
  const [rerenderTwo] = useRecoilState2();
  return <Box>Hola, el valor es {rerenderTwo.toString()}</Box>;
};

const HoliYoNecesitoElTercerContext: React.FC<any> = () => {
  const [rerenderThree] = useRecoilState3();
  return <Box>Hola, el valor es {rerenderThree.toString()}</Box>;
};

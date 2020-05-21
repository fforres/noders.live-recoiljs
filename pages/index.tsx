import * as React from "react";
import { Page, Box } from "../components/Elements";
import { Box1 } from "../components/ComponentExample";

const ComponenteLejos1: React.FC<any> = (props) => {
  return (
    <Box>
      <Box1 {...props} />
      {/* <b>necesitamos compartirlo aca: {rerenderOne}</b>
      <button onClick={() => setRerenderOne((prev) => !Boolean(prev))}>
        Rerender
      </button> */}
    </Box>
  );
};

export default function Home() {
  // const [rerenderOne, setRerenderOne] = React.useState(false);
  return (
    <Page>
      <ComponenteLejos1
      // rerenderOne={rerenderOne}
      // setRerenderOne={setRerenderOne}
      />
      {/* <HoliYoTambienLoNecesito rerenderOne={rerenderOne} /> */}
    </Page>
  );
}

const HoliYoTambienLoNecesito: React.FC<any> = ({ rerenderOne }) => {
  return <Box>Hola, el valor es {rerenderOne.toString()}</Box>;
};

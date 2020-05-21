import * as React from "react";
import { RecoilRoot, useRecoilValue } from "recoil";
import { Page, Box } from "../components/Elements";
import {
  Box1,
  DatumType,
  filteredElements,
} from "../components/RecoilSelectors";

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
        {typeof window !== "undefined" && <List />}
      </Page>
    </RecoilRoot>
  );
}

const List: React.FC<any> = () => {
  const elements = useRecoilValue(filteredElements);
  return (
    <Box>
      {elements.map((el: DatumType) => (
        <p key={el.id}>
          <span>🗣 {el.userName}</span>
          <br />
          <span>💼 {el.backend}</span>
          <br />
          <span>🔑 {el.id}</span>
          <br />
          <br />
        </p>
      ))}
    </Box>
  );
};

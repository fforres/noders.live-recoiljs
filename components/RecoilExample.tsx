import * as React from "react";
import { useRecoilState, atom } from "recoil";
import { Box } from "./Elements";

export const rerenderState1 = atom({
  key: "rerenderState1",
  default: false,
});

export const rerenderState2 = atom({
  key: "rerenderState2",
  default: false,
});

export const rerenderState3 = atom({
  key: "rerenderState3",
  default: false,
});

export const useRecoilState1 = () => useRecoilState(rerenderState1);
export const useRecoilState2 = () => useRecoilState(rerenderState2);
export const useRecoilState3 = () => useRecoilState(rerenderState3);

const ComponenteConEstadoLocal: React.FC<any> = () => {
  const [rerenderOne, setRerenderOne] = useRecoilState1();
  const [rerenderTwo, setRerenderTwo] = useRecoilState2();
  const [rerenderThree, setRerenderThree] = useRecoilState3();
  return (
    <>
      <div>{rerenderOne.toString()}</div>
      <div>2{rerenderTwo.toString()}</div>
      <div>3{rerenderThree.toString()}</div>
      <button onClick={() => setRerenderOne((prev) => !Boolean(prev))}>
        Rerender 1
      </button>
      <button onClick={() => setRerenderTwo((prev) => !Boolean(prev))}>
        Rerender 2
      </button>
      <button onClick={() => setRerenderThree((prev) => !Boolean(prev))}>
        Rerender 3
      </button>
    </>
  );
};

export const Box6: React.FC<any> = (props) => {
  return (
    <Box>
      <ComponenteConEstadoLocal {...props} />
    </Box>
  );
};
export const Box5: React.FC<any> = (props) => {
  return (
    <Box>
      <Box6 {...props} />
    </Box>
  );
};
export const Box4: React.FC<any> = (props) => {
  return (
    <Box>
      <Box5 {...props} />
    </Box>
  );
};
export const Box3: React.FC<any> = (props) => {
  return (
    <Box>
      <Box4 {...props} />
    </Box>
  );
};
export const Box2: React.FC<any> = (props) => {
  return (
    <Box>
      <Box3 {...props} />
    </Box>
  );
};
export const Box1: React.FC<any> = (props) => {
  return (
    <Box>
      <Box2 {...props} />
    </Box>
  );
};

import * as React from "react";
import { Box } from "./Elements";

export const Context = React.createContext<any>(undefined);
export const ContextProvider: React.FC = ({ children }) => {
  const [rerenderOne, setRerenderOne] = React.useState(false);
  return (
    <Context.Provider
      value={{
        rerenderOne,
        setRerenderOne,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const Context2 = React.createContext<any>(undefined);
export const ContextProvider2: React.FC = ({ children }) => {
  const [rerenderTwo, setRerenderTwo] = React.useState(false);
  return (
    <Context2.Provider
      value={{
        rerenderTwo,
        setRerenderTwo,
      }}
    >
      {children}
    </Context2.Provider>
  );
};

export const Context3 = React.createContext<any>(undefined);
export const ContextProvider3: React.FC = ({ children }) => {
  const [rerenderThree, setRerenderThree] = React.useState(false);
  return (
    <Context3.Provider
      value={{
        rerenderThree,
        setRerenderThree,
      }}
    >
      {children}
    </Context3.Provider>
  );
};
const ComponenteConEstadoLocal: React.FC<any> = () => {
  const { rerenderOne, setRerenderOne } = React.useContext(Context);
  const { rerenderTwo, setRerenderTwo } = React.useContext(Context2);
  const { rerenderThree, setRerenderThree } = React.useContext(Context3);
  return (
    <>
      <div>1{rerenderOne.toString()}</div>
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

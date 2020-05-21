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

const ComponenteConEstadoLocal: React.FC<any> = () => {
  const { rerenderOne, setRerenderOne } = React.useContext(Context);
  return (
    <>
      <div>{rerenderOne.toString()}</div>
      <button onClick={() => setRerenderOne((prev) => !Boolean(prev))}>
        Rerender
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

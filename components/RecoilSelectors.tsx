import * as React from "react";
import faker from "faker";
import { useRecoilState, atom, selector } from "recoil";
import { Box } from "./Elements";

faker.seed(420);

enum OptionsEnum {
  ShowAll = "Show All",
  ShowDeno = "Show Deno",
  ShowNode = "Show Node",
}

enum BackendEnum {
  Node = "Node",
  Deno = "Deno",
}

const createDatum = () => {
  console.log(Date.now());
  return {
    id: faker.random.uuid(),
    userName: faker.internet.userName(),
    image: faker.image.dataUri(200, 300),
    bio: faker.lorem.sentences(2),
    backend: faker.helpers.randomize([BackendEnum.Node, BackendEnum.Deno]),
  };
};

export type DatumType = ReturnType<typeof createDatum>;

const defaultData = new Array(100).fill(0).map((el) => createDatum());
console.log(defaultData);

export const dataToFilter = atom({
  key: "dataToFilter",
  default: defaultData,
});

export const stateSelector = atom({
  key: "stateSelector",
  default: OptionsEnum.ShowAll,
});

export const filteredElements = selector({
  key: "filteredElements",
  get: ({ get }: any) => {
    const data = get(dataToFilter);
    const selector = get(stateSelector);
    console.log({ data });
    if (selector === OptionsEnum.ShowDeno) {
      return data.filter(
        ({ backend }: DatumType) => backend === BackendEnum.Deno
      );
    }
    if (selector === OptionsEnum.ShowNode) {
      return data.filter(
        ({ backend }: DatumType) => backend === BackendEnum.Node
      );
    }
    return data;
  },
});

const ComponenteConEstadoLocal: React.FC<any> = () => {
  const [selection, setSelection] = useRecoilState(stateSelector);
  const updateSelection = ({
    target: { value },
  }: React.ChangeEvent<HTMLSelectElement>) => {
    setSelection(value);
  };
  return (
    <>
      <div>
        <select value={selection} onChange={updateSelection}>
          <option value={OptionsEnum.ShowAll}>All</option>
          <option value={OptionsEnum.ShowDeno}>Deno</option>
          <option value={OptionsEnum.ShowNode}>Node</option>
        </select>
        <p>Seleccion: {selection}</p>
      </div>
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

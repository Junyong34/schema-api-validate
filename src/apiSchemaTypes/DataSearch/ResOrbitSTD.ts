import { data_graph_overview_orbit } from "../../__apiTypes__";

export type ResOrbit = data_graph_overview_orbit;

type OrbitData = {
  bearingId: number;
  bearingName: string;
  times: Array<number>;
  vibOrbitRaw: vibOrbitData;
  vibOrbit1X: vibOrbitData;
};
type vibOrbitData = Array<[number, number]>;

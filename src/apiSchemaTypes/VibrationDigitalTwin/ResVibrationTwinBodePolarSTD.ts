import { data_graph_bode_polar } from "../../__apiTypes__";

export type ResVibrationTwinBodePolar = data_graph_bode_polar;

type VTBPData = {
  bearingId: number;
  bearingName: string;
  vibVectorX: vibBodePolarData;
  vibVectorY: vibBodePolarData;
  rpm: number;
};
type vibBodePolarData = Array<number>;

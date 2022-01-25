import { vibration_digital_twin_info } from "../../__apiTypes__";

export type ResVibrationTwinEccentricity = vibration_digital_twin_info;

type VTEJData = {
  bearingId: number;
  bearingName: string;
  state: string;
  failureMode: string;
  iso: number;
  vibXP2p: number;
  vibYP2p: number;
  vibXPhase: number;
  vibYPhase: number;
  temperature: number;
};

type VTEBData = {
  bearingId: number;
  bearingName: string;
  times: Array<number>;
  vibOrbitRaw: vibEccData;
  vibOrbit1X: vibEccData;
};
type vibEccData = Array<[number, number]>;

import { vib_pred_dashboard } from "../../__apiTypes__";

export type ResVibrationPredict = vib_pred_dashboard;
type predictThrustBearing = {
  bearingId: number;
  bearingName: string;
  position: number;
  activeTopTemperature: number;
  activeBottomTemperature: number;
  inactiveTopTemperature: number;
  inactiveBottomTemperature: number;
};
type predictJournalBearing = {
  bearingId: number;
  bearingName: string;
  state: string;
  vibXP2p: number;
  vibYP2p: number;
  model: predictModel[];
};

type predictModel = {
  modelId: string;
  vibX10MinPredict: number;
  vibX20MinPredict: number;
  vibX30MinPredict: number;
  vibY10MinPredict: number;
  vibY20MinPredict: number;
  vibY30MinPredict: number;
  vibX10MinLower: number;
  vibX20MinLower: number;
  vibX30MinLower: number;
  vibY10MinLower: number;
  vibY20MinLower: number;
  vibY30MinLower: number;
  vibX10MinUpper: number;
  vibX20MinUpper: number;
  vibX30MinUpper: number;
  vibY10MinUpper: number;
  vibY20MinUpper: number;
  vibY30MinUpper: number;
  vibX10MinRisk: number;
  vibX20MinRisk: number;
  vibX30MinRisk: number;
  vibY10MinRisk: number;
  vibY20MinRisk: number;
  vibY30MinRisk: number;
  R2: number;
  predictiveAccuracy: number;
  beforeData: predictBeforeData[];
};

type predictBeforeData = {
  acqTime: string;
  vibXP2p: number;
  vibYP2p: number;
  vibX10MinPredict: number;
  vibX20MinPredict: number;
  vibX30MinPredict: number;
  vibY10MinPredict: number;
  vibY20MinPredict: number;
  vibY30MinPredict: number;
};

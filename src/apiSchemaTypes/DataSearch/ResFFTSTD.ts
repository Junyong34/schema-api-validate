import { data_graph_fft } from "../../__apiTypes__";

export type ResFFT = data_graph_fft;

type FFTData = {
  bearingId: number;
  bearingName: string;
  vibXFft: vibFftData;
  vibYFft: vibFftData;
  vibFftFull: vibFftData;
};
type vibFftData = {
  x: Array<number>;
  y: Array<number>;
};

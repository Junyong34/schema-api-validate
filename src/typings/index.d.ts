import { extendJSCMatcher } from "../jestExtend";
export {};
declare global {
  namespace jest {
    interface Matchers<R, T> {
      toBeOdd(): R;
      toMatchJSC(data: any): R;
      // toHaveBeenCalledWithRightType(data: string): R;
    }
  }
}

extendJSCMatcher();

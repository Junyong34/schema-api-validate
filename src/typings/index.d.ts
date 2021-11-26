export {};
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeOdd(): R;
      toMatchJSC(data: any): R;
      // toHaveBeenCalledWithRightType(data: string): R;
    }
  }
}

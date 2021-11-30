export {};
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeOdd(): R;
      toBeWithinRange(a: number, b: number): R;
      toMatchJSC(data: any): R;
    }
  }
}

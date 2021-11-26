type fnArray = any;
export const pipe =
  (...fn: fnArray[]) =>
  (v?: any) => {
    fn.reduce((_v: any, f: any) => {
      return f(_v);
    }, v);
  };

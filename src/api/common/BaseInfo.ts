const url = `${
  process.env.REACT_APP_URL ? process.env.REACT_APP_URL : `https://reqres.in`
}`;
export const baseURL = `${url}/api`;

const axiosDefaultConfig = {
  headers: {},
  baseURL,
  timeout: 30000,
};

export default axiosDefaultConfig;

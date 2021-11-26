import { axiosInstance } from "../common/Axios";

type queryDate = {
  [key: string]: string | null;
};

export const fetchUsers = async (userId: number) => {
  const { data } = await axiosInstance.get(`users/${userId}`);
  return data;
};

export default fetchUsers;

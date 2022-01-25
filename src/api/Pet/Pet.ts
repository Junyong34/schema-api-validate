import { axiosInstance } from "../common/Axios";

const fetchPetId = async (petId: number) => {
  const { data } = await axiosInstance.get(`/stocks`);
  return data;
};

export { fetchPetId };

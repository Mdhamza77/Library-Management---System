import api from "../api";

export const getRentedData = async (id) => {
  return await api.get("/Books/" + id);
};

export const rentBooks = async (book) => {
  return await api.post("/Rent/", book);
};

export const getData = async () => {
  return await api.get("/Rent");
};

export const returnBook = async (id) => {
  return await api.delete("/Rent/" + id);
};

import api from "../api";

export const getHomeData = async () => {
  return await api.get("/getData");
};

export const getCards = async () => {
  return await api.get("/Cards");
};

export const getFeedBack = async () => {
  return await api.get("/FeedBack");
};

export const postFeedBack = async (feed) => {
  return await api.post("/FeedBack", feed);
};
